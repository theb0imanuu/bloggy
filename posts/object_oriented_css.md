---
title: "Object-Oriented CSS (OOCSS)"
date: "2025-06-10"
excerpt: "Object-Oriented CSS is a methodology that encourages reusable, modular, and maintainable styles by treating page elements as objects."
readTime: 7 
tags: ["css", "frontend", "webdev", "oocss", "modular-design"]
---

**Object-Oriented CSS (OOCSS)** is a methodology for writing scalable and maintainable stylesheets. Coined by Nicole Sullivan, OOCSS treats visual components like reusable “objects” with consistent patterns.

## Key Principles of OOCSS

1. **Separate structure and skin**

   - Structure (layout, dimensions)
   - Skin (color, font, backgrounds)

2. **Separate container and content**

   - Avoid styling elements based on where they are
   - Style them based on what they are

### Example

```html
<div class="media">
  <img class="media-img" src="image.jpg" />
  <div class="media-body">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

```css
.media {
  display: flex;
}
.media-img {
  width: 100px;
}
.media-body {
  flex: 1;
}
```

## Benefits of OOCSS

- Encourages reuse
- Reduces duplication
- Improves collaboration in teams
- Makes maintenance easier over time

OOCSS is especially helpful in **large codebases**, where keeping CSS organized is critical to performance and teamwork.

