---
title: "Installation of Jekyll: Your Complete Setup Guide"
date: "2025-06-10"
excerpt: "A comprehensive step-by-step guide to installing Jekyll on Windows, macOS, and Linux, including troubleshooting common issues and getting your first site running."
readTime: 12
tags: ["jekyll", "installation", "static-site-generator", "ruby", "web-development"]
---

Jekyll is a powerful static site generator that transforms your plain text into static websites and blogs. Used by GitHub Pages and trusted by developers worldwide, Jekyll combines the simplicity of Markdown with the flexibility of templating engines. This comprehensive guide will walk you through installing Jekyll on any operating system and getting your first site up and running.

## What is Jekyll?

Jekyll is a static site generator written in Ruby that takes text written in your favorite markup language and uses layouts to create a static website. Originally created by GitHub co-founder Tom Preston-Werner in 2008, Jekyll has become the engine behind millions of websites, including GitHub Pages, which serves over 3 million sites worldwide.

Jekyll is blog-aware, meaning it understands posts, pages, permalinks, categories, and tags out of the box. Unlike dynamic content management systems that require databases and server-side processing, Jekyll pre-builds your entire site as static HTML, CSS, and JavaScript files.

**Key Benefits:**
- **Fast and Secure:** Static sites load quickly and have no database vulnerabilities or server-side attack vectors
- **Version Control Friendly:** Everything is plain text, perfect for Git workflows and collaborative development
- **GitHub Pages Integration:** Deploy directly to GitHub Pages for free hosting with automatic builds
- **Highly Customizable:** Extensive theme ecosystem and plugin support with over 1,000 available themes
- **Markdown Support:** Write content in Markdown, HTML, or Liquid templates with syntax highlighting
- **SEO Optimized:** Built-in support for clean URLs, meta tags, and structured data
- **Cost Effective:** No hosting costs for small to medium sites when using GitHub Pages

## Prerequisites

Before installing Jekyll, you'll need to have these dependencies installed. Jekyll's requirements are straightforward but vary slightly by operating system:

### Required Dependencies
- **Ruby** (version 2.5.0 or higher, with 3.0+ recommended for best performance)
- **RubyGems** (package manager for Ruby, usually bundled with Ruby)
- **GCC and Make** (for building native extensions and compiling gems)
- **Node.js** (optional but recommended for modern JavaScript processing)

### Checking Your Current Setup

First, check if you already have the required dependencies:

```bash
# Check Ruby version
ruby -v

# Check RubyGems version
gem -v

# Check GCC
gcc -v

# Check Make
make -v

# Check Node.js (optional)
node -v
```

If any of these commands return "command not found," you'll need to install the missing dependencies.

## Installation on macOS

macOS comes with Ruby pre-installed, but it's often an older version. For the best Jekyll experience, we recommend installing a newer Ruby version through package managers.

### Method 1: Using Homebrew (Recommended)

Homebrew is the most popular package manager for macOS and provides the cleanest installation experience.

**Step 1: Install Homebrew** (if not already installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 2: Install Ruby using Homebrew**
```bash
# Install the latest Ruby
brew install ruby

# Add Homebrew Ruby to your PATH (for M1/M2 Macs)
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# For Intel Macs
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Step 3: Install Jekyll and Bundler**
```bash
gem install jekyll bundler
```

### Method 2: Using rbenv (For Ruby Version Management)

rbenv allows you to install and manage multiple Ruby versions, which is particularly useful for developers working on multiple projects.

**Step 1: Install rbenv**
```bash
brew install rbenv ruby-build
```

**Step 2: Initialize rbenv**
```bash
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

**Step 3: Install and set Ruby version**
```bash
# List available Ruby versions
rbenv install -l

# Install Ruby 3.2.0 (or latest stable version)
rbenv install 3.2.0
rbenv global 3.2.0

# Verify installation
ruby -v
```

**Step 4: Install Jekyll**
```bash
gem install jekyll bundler
```

### Troubleshooting macOS Installation

**Common Issue: Permission Errors**
If you encounter permission errors when installing gems, avoid using `sudo` as it can cause security issues. Instead:

```bash
# Set gem install directory to user directory
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Then install Jekyll
gem install jekyll bundler
```

**Common Issue: Xcode Command Line Tools**
If you get errors about missing development tools:
```bash
xcode-select --install
```

## Installation on Windows

Windows requires additional setup since Ruby isn't included by default. We'll cover two primary methods: RubyInstaller for native Windows installation and WSL for a Linux-like environment.

### Method 1: Using RubyInstaller (Recommended)

RubyInstaller provides the most straightforward way to get Ruby running on Windows.

**Step 1: Download RubyInstaller**
- Visit [RubyInstaller.org](https://rubyinstaller.org/downloads/)
- Download Ruby+Devkit version (includes development tools)
- Choose the latest stable version with Devkit (recommended: Ruby 3.2.x)

**Step 2: Install Ruby**
- Run the installer as administrator
- Check "Add Ruby executables to your PATH"
- Check "Associate .rb and .rbw files with this Ruby installation"
- At the end of installation, run `ridk install` when prompted
- Choose option 3 (MSYS2 and MINGW development toolchain)

**Step 3: Install Jekyll**
Open Command Prompt or PowerShell as administrator and run:
```bash
gem install jekyll bundler
```

**Step 4: Verify Installation**
```bash
jekyll -v
bundler -v
```

### Method 2: Using Windows Subsystem for Linux (WSL)

WSL provides a full Linux environment on Windows, offering better compatibility for Ruby development.

**Step 1: Install WSL**
Open PowerShell as administrator:
```powershell
wsl --install -d Ubuntu
```

Restart your computer when prompted.

**Step 2: Update and Install Dependencies**
Open Ubuntu from the Start menu:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install ruby-full build-essential zlib1g-dev git
```

**Step 3: Configure Gem Environment**
```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**Step 4: Install Jekyll**
```bash
gem install jekyll bundler
```

### Troubleshooting Windows Installation

**Common Issue: SSL Certificate Errors**
```bash
# Update RubyGems
gem update --system

# Download SSL certificates
gem which rubygems
# Navigate to the gems directory and download certificates
```

**Common Issue: EventMachine Installation Problems**
```bash
# Install EventMachine with platform flag
gem install eventmachine --platform ruby
```

**Common Issue: Path Issues**
If Jekyll commands aren't recognized, verify your PATH includes Ruby's bin directory.

## Installation on Linux (Ubuntu/Debian)

Linux distributions typically include Ruby, but you may need to install additional development packages.

### Standard Installation

**Step 1: Update Package Index**
```bash
sudo apt-get update && sudo apt-get upgrade -y
```

**Step 2: Install Dependencies**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev git curl
```

**Step 3: Configure Gem Installation Directory**
Installing gems to a user directory avoids permission issues:
```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**Step 4: Install Jekyll**
```bash
gem install jekyll bundler
```

### Installation on CentOS/RHEL/Fedora

**For CentOS/RHEL:**
```bash
sudo yum groupinstall "Development Tools"
sudo yum install ruby ruby-devel git

# Configure gems directory (same as Ubuntu)
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```

**For Fedora:**
```bash
sudo dnf groupinstall "Development Tools"
sudo dnf install ruby ruby-devel redhat-rpm-config git

# Configure and install Jekyll (same as above)
```

## Creating Your First Jekyll Site

### Quick Start

**Step 1: Create a New Site**
```bash
jekyll new my-awesome-site
cd my-awesome-site
```

**Step 2: Install Dependencies**
```bash
bundle install
```

**Step 3: Build and Serve**
```bash
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`. The `--livereload` flag enables automatic browser refresh:
```bash
bundle exec jekyll serve --livereload
```

### Understanding the Site Structure

Jekyll follows a conventional directory structure that becomes intuitive once you understand the purpose of each folder:

```
my-awesome-site/
├── _config.yml          # Site configuration and settings
├── _posts/              # Blog posts (dated content)
├── _pages/              # Static pages (about, contact, etc.)
├── _layouts/            # HTML templates for different page types
├── _includes/           # Reusable template partials
├── _sass/               # Sass stylesheets for compilation
├── _data/               # YAML, JSON, CSV data files
├── assets/              # CSS, JS, images, and other static files
├── _site/               # Generated static site (auto-generated)
├── Gemfile              # Ruby gem dependencies
├── Gemfile.lock         # Locked gem versions for consistency
└── index.markdown       # Homepage content
```

### Customizing Your Configuration

The `_config.yml` file controls how Jekyll builds your site. Here's a comprehensive configuration example:

```yaml
# Site settings
title: Your Awesome Website
email: your-email@example.com
description: >-
  A comprehensive guide to web development,
  covering modern frameworks, best practices,
  and industry insights.

baseurl: "" # subpath of your site, e.g. /blog
url: "https://yourdomain.com" # your site's base URL

# Author information
author:
  name: Your Name
  email: your-email@example.com
  twitter: your_twitter_handle

# Build settings
markdown: kramdown
highlighter: rouge
theme: minima

# Plugins
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-paginate

# Pagination
paginate: 5
paginate_path: "/blog/page:num/"

# SEO and social
twitter:
  username: your_twitter_handle
  card: summary

social:
  name: Your Name
  links:
    - https://twitter.com/your_twitter_handle
    - https://github.com/your_github_username

# Exclude files from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - README.md
  - CHANGELOG.md
```

## Working with Jekyll

### Creating Content

**Create a New Post:**
Posts must follow the naming convention `YEAR-MONTH-DAY-title.MARKUP`:

```bash
# Create a new post
touch _posts/2025-06-10-my-first-post.md
```

**Sample Post Content:**
```markdown
---
layout: post
title: "My First Jekyll Post"
date: 2025-06-10 14:30:00 +0000
categories: [jekyll, tutorial]
tags: [jekyll, web development, static sites]
author: Your Name
excerpt: "A beginner's guide to creating your first Jekyll blog post with proper formatting and structure."
---

# Welcome to Jekyll!

This is my first post using Jekyll, and I'm excited to share what I've learned about this powerful static site generator.

## What Makes Jekyll Special?

Jekyll offers several advantages over traditional content management systems:

- **Speed**: Static sites load incredibly fast
- **Security**: No database means fewer attack vectors
- **Simplicity**: Write in Markdown, deploy anywhere
- **Flexibility**: Complete control over your site's structure

## Getting Started Tips

Here are some essential tips for Jekyll beginners:

1. **Use front matter wisely** - It controls how Jekyll processes your content
2. **Leverage layouts** - Create reusable templates for consistency
3. **Organize your content** - Use categories and tags strategically
4. **Test locally** - Always preview changes before deploying

Happy blogging with Jekyll!
```

### Advanced Configuration

**Custom Collections:**
Beyond posts and pages, Jekyll supports custom collections:

```yaml
# _config.yml
collections:
  projects:
    output: true
    permalink: /:collection/:name/
  testimonials:
    output: false
```

**Environment-Specific Settings:**
```yaml
# Development settings
url: "http://localhost:4000"
environment: development

# Production settings (override in _config_prod.yml)
url: "https://yourdomain.com"
environment: production
```

### Performance Optimization

**Incremental Building:**
For large sites, enable incremental builds:
```bash
bundle exec jekyll serve --incremental
```

**Asset Optimization:**
Use Jekyll plugins for asset optimization:
```yaml
plugins:
  - jekyll-minifier
  - jekyll-compress-images
  - jekyll-inline-svg
```

## Deployment Options

### GitHub Pages
The simplest deployment method for Jekyll sites:

1. Push your Jekyll site to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site automatically builds and deploys

### Netlify
For more advanced deployment features:

1. Connect your GitHub repository to Netlify
2. Set build command: `jekyll build`
3. Set publish directory: `_site`
4. Deploy automatically on every push

### Custom Hosting
For complete control:

```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Upload _site/ directory to your web server
rsync -avz _site/ user@yourserver.com:/var/www/html/
```

## Troubleshooting Common Issues

### Build Errors
- **Dependency conflicts**: Run `bundle update` to resolve gem conflicts
- **Ruby version issues**: Use rbenv or RVM to manage Ruby versions
- **Missing gems**: Ensure all dependencies are listed in your Gemfile

### Performance Issues
- **Slow builds**: Use `--incremental` flag and exclude unnecessary files
- **Large sites**: Consider pagination and lazy loading for better performance
- **Image optimization**: Compress images and use appropriate formats

### Content Issues
- **Broken links**: Use `jekyll-check-links` plugin to validate internal links
- **Encoding problems**: Ensure files are saved in UTF-8 encoding
- **Date formatting**: Use ISO 8601 format (YYYY-MM-DD HH:MM:SS +TIMEZONE)

This comprehensive guide covers everything you need to successfully install and configure Jekyll on any operating system. Whether you're building a personal blog, portfolio site, or documentation hub, Jekyll provides the foundation for creating fast, secure, and maintainable static websites.

With Jekyll installed and configured, you're ready to start creating content and customizing your site. The static site generator's flexibility and extensive ecosystem make it an excellent choice for developers and content creators alike.

Happy building! 🚀