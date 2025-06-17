let posts = [];
const POSTS_PER_PAGE = 4;

// --- Utility Functions ---
async function loadPosts() {
  if (posts.length === 0) {
    const res = await fetch('/api/posts');
    posts = await res.json();
  }
}

function getPageFromHash() {
  const match = location.hash.match(/page=(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
}

// --- Render Functions ---
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
  const page = getPageFromHash();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const paginated = posts.slice(start, start + POSTS_PER_PAGE);

  const container = document.getElementById('app');
  container.innerHTML = `
    <section class="archive">
      <h2>All Posts</h2>
      <div class="posts-list">
        ${paginated.map(post => `
          <div class="post-item" onclick="location.hash='#post/${post.slug}'">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>${post.date} · ${post.readTime} min read</small>
          </div>`).join('')}
      </div>
      <div class="pagination">
        ${page > 1 ? `<button onclick="location.hash='#archive?page=${page - 1}'">← Prev</button>` : ''}
        <span>Page ${page} of ${totalPages}</span>
        ${page < totalPages ? `<button onclick="location.hash='#archive?page=${page + 1}'">Next →</button>` : ''}
      </div>
    </section>
  `;
}

async function renderPost(slug) {
  await loadPosts();
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

function renderContact() {
  const container = document.getElementById('app');
  container.innerHTML = `
    <section class="contact container">
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
      <div class="contact-links">
        <h3>Or reach me directly:</h3>
        <ul>
          <li><img src="/assets/icons/email.svg" alt="Email" class="icon" /><a href="mailto:emmwaniki2004@gmail.com">Mail</a></li>
          <li><img src="/assets/icons/linkedin.svg" alt="LinkedIn" class="icon" /><a href="https://www.linkedin.com/in/emmanuel-mwaniki" target="_blank">LinkedIn</a></li>
          <li><img src="/assets/icons/github.svg" alt="GitHub" class="icon" /><a href="https://github.com/theb0imanuu" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </section>
  `;
}

function renderNotFound() {
  document.getElementById('app').innerHTML = "<p>Post not found.</p>";
}

// --- Routing ---
function handleRouteChange() {
  const hash = window.location.hash || '#home';

  if (hash.startsWith('#post/')) {
    const slug = hash.split('/')[1];
    renderPost(slug);
  } else if (hash.startsWith('#archive')) {
    renderArchive(); // supports ?page=
  } else if (hash === '#contact') {
    renderContact();
  } else {
    renderHome();
  }
}

window.addEventListener('hashchange', handleRouteChange);
window.addEventListener('DOMContentLoaded', handleRouteChange);
// This is a comment
