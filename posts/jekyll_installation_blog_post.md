---
title: "Installation of Jekyll: Your Complete Setup Guide"
date: "2025-06-10"
excerpt: "A comprehensive step-by-step guide to installing Jekyll on Windows, macOS, and Linux, including troubleshooting common issues and getting your first site running."
readTime: 12
tags: ["jekyll", "installation", "static-site-generator", "ruby", "web-development"]
---


Jekyll is a powerful static site generator that transforms your plain text into static websites and blogs. Used by GitHub Pages and trusted by developers worldwide, Jekyll combines the simplicity of Markdown with the flexibility of templating engines. This comprehensive guide will walk you through installing Jekyll on any operating system and getting your first site up and running.

## What is Jekyll?

Jekyll is a static site generator written in Ruby that takes text written in your favorite markup language and uses layouts to create a static website. It's blog-aware, meaning it understands posts, pages, permalinks, categories, and tags out of the box.

**Key Benefits:**
- **Fast and Secure:** Static sites load quickly and have no database vulnerabilities
- **Version Control Friendly:** Everything is plain text, perfect for Git
- **GitHub Pages Integration:** Deploy directly to GitHub Pages for free hosting
- **Highly Customizable:** Extensive theme ecosystem and plugin support
- **Markdown Support:** Write content in Markdown, HTML, or Liquid templates

## Prerequisites

Before installing Jekyll, you'll need to have these dependencies installed:

### Required Dependencies
- **Ruby** (version 2.5.0 or higher)
- **RubyGems** (package manager for Ruby)
- **GCC and Make** (for building native extensions)

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
```

If any of these commands return "command not found," you'll need to install the missing dependencies.

## Installation on macOS

### Method 1: Using Homebrew (Recommended)

**Step 1: Install Homebrew** (if not already installed)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 2: Install Ruby using Homebrew**
```bash
# Install the latest Ruby
brew install ruby

# Add Homebrew Ruby to your PATH
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Step 3: Install Jekyll and Bundler**
```bash
gem install jekyll bundler
```

### Method 2: Using rbenv (For Ruby Version Management)

**Step 1: Install rbenv**
```bash
brew install rbenv
```

**Step 2: Initialize rbenv**
```bash
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

**Step 3: Install and set Ruby version**
```bash
# Install Ruby 3.1.0 (or latest stable version)
rbenv install 3.1.0
rbenv global 3.1.0
```

**Step 4: Install Jekyll**
```bash
gem install jekyll bundler
```

### Troubleshooting macOS Installation

**Common Issue: Permission Errors**
If you encounter permission errors, avoid using `sudo`. Instead:

```bash
# Set gem install directory to user directory
echo 'export GEM_HOME="$HOME/.gem"' >> ~/.zshrc
echo 'export PATH="$HOME/.gem/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Then install Jekyll
gem install jekyll bundler
```

## Installation on Windows

### Method 1: Using RubyInstaller (Recommended)

**Step 1: Download RubyInstaller**
- Visit [RubyInstaller.org](https://rubyinstaller.org/downloads/)
- Download Ruby+Devkit version (includes development tools)
- Choose the latest stable version with Devkit

**Step 2: Install Ruby**
- Run the installer
- Check "Add Ruby executables to your PATH"
- At the end of installation, run `ridk install` when prompted
- Choose option 3 (MSYS2 and MINGW development toolchain)

**Step 3: Install Jekyll**
Open Command Prompt or PowerShell and run:
```bash
gem install jekyll bundler
```

### Method 2: Using Windows Subsystem for Linux (WSL)

**Step 1: Install WSL**
```powershell
wsl --install -d Ubuntu
```

**Step 2: Update and Install Dependencies**
```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
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

# If still having issues, try:
gem install --http-proxy http://localhost:8080 jekyll bundler
```

**Common Issue: EventMachine Installation Problems**
```bash
# Install EventMachine with platform flag
gem install eventmachine --platform ruby
```

## Installation on Linux (Ubuntu/Debian)

### Standard Installation

**Step 1: Update Package Index**
```bash
sudo apt-get update
```

**Step 2: Install Dependencies**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

**Step 3: Configure Gem Installation Directory**
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
sudo yum install ruby ruby-devel

# Configure gems directory (same as Ubuntu)
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler
```

**For Fedora:**
```bash
sudo dnf groupinstall "Development Tools"
sudo dnf install ruby ruby-devel redhat-rpm-config

# Configure and install Jekyll (same as above)
```

## Creating Your First Jekyll Site

### Quick Start

**Step 1: Create a New Site**
```bash
jekyll new my-awesome-site
cd my-awesome-site
```

**Step 2: Build and Serve**
```bash
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`

### Understanding the Site Structure

```
my-awesome-site/
├── _config.yml          # Configuration file
├── _posts/              # Blog posts directory
├── _layouts/            # HTML templates
├── _includes/           # Reusable template parts
├── _sass/               # Sass stylesheets
├── assets/              # CSS, JS, images
├── _site/               # Generated static site (don't edit)
├── Gemfile              # Ruby gem dependencies
├── Gemfile.lock         # Locked gem versions
└── index.markdown       # Homepage
```

### Customizing Your Configuration

Edit `_config.yml` to customize your site:

```yaml
# Site settings
title: Your Awesome Website
email: your-email@example.com
description: >-
  A fantastic blog about web development,
  design, and other cool stuff.

baseurl: "" # subpath of your site, e.g. /blog
url: "https://yourdomain.com" # base hostname

# Build settings
markdown: kramdown
highlighter: rouge
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# Exclude files from processing
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
```

## Working with Jekyll

### Creating Content

**Create a New Post:**
```bash
Posts go in _posts/ directory with specific naming convention
Format: YEAR-MONTH-DAY-title.MARKUP
touch _posts/2025-06-10-my-first-post.md
```

**Sample Post Content:**
```markdown
---
layout: post
title:  "My First Jekyll Post"
date:   2025-06-10 14:30:00 +0000
categories: jekyll update
tags: [jekyll, web development]

---

This concludes your complete setup guide to Jekyll. You now have everything you need to get started creating fast, secure, and customizable static websites.

Happy building! 🚀
