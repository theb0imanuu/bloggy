---
title: "Marp: Create Presentations with Markdown"
date: "2025-06-10"
excerpt: "Turn simple Markdown into beautiful, slide-based presentations using Marp—a powerful open-source tool for developers, educators, and speakers." 
readTime: 6 
tags: ["markdown", "marp", "presentations", "slides", "writing"]
---

**Marp** (Markdown Presentation Ecosystem) allows you to create visually appealing slide decks using just Markdown syntax. Created by Yuki Hattori and adopted by thousands of developers worldwide, Marp revolutionizes presentation creation by combining the simplicity of Markdown with the power of modern web technologies.

Whether you're delivering technical talks at conferences, teaching programming concepts, or presenting project updates to your team, Marp eliminates the friction between your ideas and your slides. It's ideal for developers and content creators who prefer writing over designing, enabling you to focus on content while Marp handles the visual presentation.

## The Philosophy Behind Marp

Traditional presentation tools often force you to spend more time formatting than focusing on content. Marp flips this paradigm by treating presentations as code—version controllable, diff-able, and maintainable. This approach resonates particularly well with developers who already live in text editors and understand the power of markup languages.

The ecosystem consists of three main components: Marp Core (the rendering engine), Marp CLI (command-line interface), and Marp for VS Code (editor integration). This modular approach allows you to choose the workflow that best fits your development environment.

## Getting Started

Marp presentations are simply Markdown files with a special twist. Write slides in `.md` files using horizontal rules (`---`) to separate slides:

```markdown
---
marp: true
theme: default
paginate: true
---

# Welcome to My Talk
## Subheading here
### Making presentations with Markdown

---

## Slide 2: Key Points
- Bullet one
- Bullet two
- *Italicized text*
- **Bold emphasis**

---

## Code Examples

````javascript
function greetAudience() {
    console.log("Hello, everyone!");
    return "Thanks for attending!";
}
````
```

The front matter at the top enables Marp processing and sets global presentation options. Each `---` creates a new slide, and standard Markdown syntax works exactly as expected.

## Installation and Setup

### Method 1: Marp CLI (Recommended for Automation)

Install Marp CLI globally using npm:

```bash
npm install -g @marp-team/marp-cli

# Verify installation
marp --version
```

**Basic usage:**
```bash
# Convert to HTML
marp slides.md

# Convert to PDF
marp slides.md --pdf

# Convert to PowerPoint
marp slides.md --pptx

# Watch for changes and auto-rebuild
marp slides.md --watch

# Serve presentation locally
marp slides.md --server
```

### Method 2: VS Code Extension

Install the "Marp for VS Code" extension for an integrated experience:

1. Open VS Code
2. Search for "Marp for VS Code" in the Extensions marketplace
3. Install and reload VS Code
4. Open any `.md` file with `marp: true` in the front matter
5. Use `Ctrl+Shift+P` and search for "Marp" commands

**VS Code Benefits:**
- Live preview as you type
- Export options directly from the editor
- Syntax highlighting for Marp directives
- Integrated presentation mode

### Method 3: Docker (For Consistent Environments)

```bash
# Run Marp in Docker
docker run --rm -v $PWD:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli slides.md --pdf

# Create an alias for convenience
alias marp-docker="docker run --rm -v \$PWD:/home/marp/app/ -e LANG=\$LANG marpteam/marp-cli"
```

## Features of Marp

### Advanced Markdown Support

Marp extends standard Markdown with presentation-specific features:

**Slide Directives:**
```markdown
---
marp: true
theme: gaia
class: lead
paginate: true
backgroundColor: #fff
---

<!-- _class: lead -->
# Title Slide
## Special formatting for this slide only

---

<!-- _backgroundColor: aqua -->
## This slide has a custom background

---

## Mathematical Expressions
$$f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d\xi$$

Inline math: $E = mc^2$
```

### Custom Themes and Styling

Marp comes with built-in themes, but you can create custom ones using CSS:

**Built-in themes:**
- `default` - Clean, professional look
- `gaia` - Modern, colorful design
- `uncover` - Minimal, text-focused

**Custom CSS example:**
```css
/* Custom theme in your Markdown file */
<style>
section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

h1 {
  color: #ffeb3b;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

code {
  background: rgba(255,255,255,0.1);
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
</style>
```

### Code Highlighting

Marp provides excellent syntax highlighting for multiple programming languages:

````markdown
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

```sql
SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.active = true
GROUP BY users.id, users.name
ORDER BY order_count DESC;
```
````

### Image and Media Handling

**Responsive images:**
```markdown
![Image with custom size](image.jpg)

![w:800 h:400](large-image.jpg)

![bg](background-image.jpg)
![bg fit](background-fit.jpg)
![bg left](split-background.jpg)
```

**Background images and layouts:**
```markdown
<!-- _backgroundImage: url('hero-image.jpg') -->
# Hero Slide

---

![bg left:40%](diagram.png)

## Split Layout
Content appears on the right while image takes up 40% on the left
```

### Speaker Notes

Add presenter notes that won't appear in the final presentation:

```markdown
## Public Slide Content

<!--
These are speaker notes - only visible to the presenter.
Remember to:
- Mention the quarterly results
- Ask for questions
- Thank the sponsors
-->

---

## Next Topic
More content here...
```

## Advanced Techniques

### Slide Classes and Styling

Use slide-specific classes for unique layouts:

```markdown
<!-- _class: lead -->
# Title Slide
Centered content with special styling

---

<!-- _class: invert -->
## Inverted Colors
Dark background, light text

---

## Two-Column Layout
<!-- _class: columns -->

### Left Column
- Point one
- Point two

### Right Column
- Point three  
- Point four
```

### Animation and Transitions

While Marp focuses on simplicity, you can add subtle animations:

```css
<style>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

section {
  animation: fadeIn 0.5s ease-in-out;
}

ul li {
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: both;
}

ul li:nth-child(2) { animation-delay: 0.1s; }
ul li:nth-child(3) { animation-delay: 0.2s; }
</style>
```

### Integration with Build Tools

**Webpack integration:**
```javascript
// webpack.config.js
const MarpWebpackPlugin = require('@marp-team/marp-webpack-plugin');

module.exports = {
  plugins: [
    new MarpWebpackPlugin({
      input: './src/slides.md',
      output: './dist/presentation.html'
    })
  ]
};
```

**GitHub Actions for automatic deployment:**
```yaml
name: Build and Deploy Marp Presentation
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install Marp CLI
        run: npm install -g @marp-team/marp-cli
      - name: Build presentation
        run: marp slides.md --html --output index.html
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## Real-World Use Cases

### Technical Documentation

Marp excels at creating technical presentations that need to be maintained over time:

```markdown
## API Endpoint Documentation

### GET /api/users
```json
{
  "users": [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
  ],
  "total": 2,
  "page": 1
}
```

**Response Codes:**
- `200` - Success
- `400` - Bad Request  
- `401` - Unauthorized
- `500` - Server Error
```

### Educational Content

For coding bootcamps and programming courses:

```markdown
## JavaScript Fundamentals

### Variables and Data Types
```javascript
// Primitive types
let name = "Alice";        // string
let age = 30;             // number
let isStudent = true;     // boolean
let nothing = null;       // null
let notDefined;          // undefined

// Reference types
let person = {           // object
  name: "Bob",
  age: 25
};
let hobbies = ["reading", "coding"]; // array
```
```

### Conference Presentations

For developer conferences and meetups:

```markdown
<!-- _class: lead -->
# Building Scalable APIs
## Lessons from Production

### Your Name | Company
### Conference 2025

---

## Today's Agenda

1. **The Problem** - Why scale matters
2. **Architecture Patterns** - Proven solutions  
3. **Implementation** - Code examples
4. **Lessons Learned** - What went wrong
5. **Q&A** - Your questions

---

## The Problem: Growing Pains

![bg right:40%](growth-chart.png)

- Started with 100 users
- Now serving 100K+ requests/minute
- Database becoming bottleneck
- Response times increasing
```

## Why Use Marp?

The advantages of Marp extend beyond simple convenience:

- **Speed and Efficiency:** Quickly build slide decks without GUI tools, focusing on content over formatting
- **Version Control Integration:** Track changes, collaborate with Git, and maintain presentation history
- **Consistency:** Enforce design standards across team presentations through shared themes
- **Portability:** Export to multiple formats (PDF, HTML, PowerPoint) for different presentation contexts
- **Automation:** Integrate with CI/CD pipelines for automatic presentation generation and deployment
- **Accessibility:** Generate presentations that work well with screen readers and other assistive technologies
- **Developer-Friendly:** Use familiar tools and workflows instead of learning new presentation software
- **Lightweight:** No heavy applications to install or maintain—just text files and simple tools

## Best Practices and Tips

### Content Organization

**Structure your presentation logically:**
```markdown
---
marp: true
theme: default
paginate: true
---

# Presentation Title
## Clear subtitle and context

---

## Agenda
- Topic 1
- Topic 2  
- Topic 3
- Q&A

---

# Topic 1
## Detailed exploration

---

## Summary and Next Steps
- Key takeaways
- Action items
- Contact information
```

### Performance Considerations

- **Optimize images:** Use appropriate formats and sizes
- **Limit animations:** Keep presentations smooth on all devices
- **Test exports:** Verify PDF and PowerPoint exports render correctly
- **Use web fonts cautiously:** Ensure fallbacks for offline presentations

### Collaboration Workflow

```bash
# Team workflow example
git clone presentation-repo
cd presentation-repo

# Create feature branch for new section
git checkout -b add-security-section

# Edit slides
marp slides.md --watch --server

# Preview and iterate
# Commit changes
git add slides.md
git commit -m "Add security considerations section"

# Share for review
git push origin add-security-section
```

Marp brings **clarity and efficiency** to presentations by treating them as code. It's Markdown-powered storytelling that's perfect for technical demos, documentation talks, developer meetups, and any scenario where content quality matters more than visual effects. The tool's simplicity doesn't limit creativity—it enhances it by removing barriers between your ideas and your audience.

With Marp, you spend less time wrestling with presentation software and more time crafting compelling narratives that engage and inform your audience. Whether you're explaining complex algorithms, presenting quarterly results, or teaching new concepts, Marp provides the foundation for professional, maintainable presentations that evolve with your content.