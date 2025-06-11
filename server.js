const express = require('express');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const app = express();
const PORT = process.env.PORT || 3000;
const POSTS_DIR = path.join(__dirname, 'posts');

app.use(express.static('public'));

app.get('/api/posts', (req, res) => {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  const posts = files.map(file => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data } = matter(content);
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readTime: data.readTime,
      tags: data.tags || []
    };
  });
  res.json(posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
});

app.get('/api/posts/:slug', (req, res) => {
  const slug = req.params.slug;
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Post not found' });
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(raw);
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});