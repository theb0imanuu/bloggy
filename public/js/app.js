// app.js - fetches and renders posts
let posts = [];

async function loadPosts() {
  const res = await fetch('/api/posts');
  posts = await res.json();
}

async function renderHome() {
  await loadPosts();
  const featured = posts.slice(0, 3);
  const container = document.getElementById('app');
  container.innerHTML = `
    <section class="hero">
      <h1>Welcome to Bloggy</h1>
      <p>Hi there! I'm glad you're here.</p>
      <p>Whether you're here to read my blog, check out my work, or just explore, there's something for everyone.</p>
      <p>Feel free to browse the latest posts or connect with me through my projects.</p>
    </section>
    <section class="featured">
      <h2>Featured Posts</h2>
      <div class="posts-grid">
        ${featured.map(post => `
          <div class="post-card" onclick="location.hash='#post/${post.slug}'">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>${post.date} · ${post.readTime} min read</small>
          </div>`).join('')}
      </div>
      <a href="#archive" class="btn">View All Posts</a>
    </section>
  `;
}

async function renderArchive() {
  await loadPosts();
  const container = document.getElementById('app');
  container.innerHTML = `
    <section class="archive">
      <h2>All Posts</h2>
      <div class="posts-list">
        ${posts.map(post => `
          <div class="post-item" onclick="location.hash='#post/${post.slug}'">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>${post.date} · ${post.readTime} min read</small>
          </div>`).join('')}
      </div>
    </section>
  `;
}

async function renderPost(slug) {
  const post = posts.find(p => p.slug === slug);
  if (!post) return renderNotFound();

  const res = await fetch(`/api/posts/${slug}`);
  const markdown = await res.text();
  const html = markdownToHTML(markdown);

  const container = document.getElementById('app');
  container.innerHTML = `
    <article class="post-page">
      <a href="#archive" class="back-btn">← Back to all posts</a>
      <h1>${post.title}</h1>
      <small>${post.date} · ${post.readTime} min read</small>
      <div class="post-content">${html}</div>
    </article>
  `;
}

function renderNotFound() {
  document.getElementById('app').innerHTML = "<p>Post not found.</p>";
}

function renderContact() {
  const container = document.getElementById('app');
  container.innerHTML = `
    <section class="contact">
      <h2>Contact Me</h2>
      <p>Have questions, feedback, or just want to say hi? Fill out the form below!</p>
      <form action="https://formspree.io/f/your_form_id" method="POST" class="contact-form">
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="_replyto" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit" class="btn">Send Message</button>
      </form>
    </section>
  `;
}
