---
title: "Getting Started with WSL: OS Installation Guide"
date: "2025-06-10"
excerpt: "A comprehensive guide to installing and setting up the Windows Subsystem for Linux (WSL) for developers and system administrators."
readTime: 5
tags: ["wsl", "installation", "windows", "linux", "tutorial"]
---


The Windows Subsystem for Linux (WSL) is a powerful feature that allows developers to run a GNU/Linux environment directly on Windows without the need for a virtual machine or dual-boot setup. It's fast, efficient, and incredibly useful for developers, sysadmins, and students alike.

## WSL 1 vs WSL 2: What's the Difference?

### WSL 1
- Translates Linux system calls into Windows calls.
- Faster access to the Windows file system.
- Lower disk usage.
- No support for full Linux kernel features (e.g., Docker).

### WSL 2
- Uses a full Linux kernel running in a lightweight virtual machine.
- Better compatibility with Linux applications.
- Supports Docker and other low-level tools.
- More isolated from Windows but slightly slower file system performance.

## Installing WSL on Windows

To get started, you'll need to enable WSL and install a Linux distribution. Let's go step-by-step:

### 1. Enable WSL and Virtual Machine Platform
```powershell
wsl --install
```
This command installs WSL with the default Ubuntu distro and sets WSL 2 as default. If you're using an older version of Windows, you may need to enable it manually via the "Windows Features" dialog.

### 2. Choose Your Linux Distribution

You can install various distros from the Microsoft Store. Examples include:
- Ubuntu
- Debian
- Kali Linux
- openSUSE
- Alpine WSL

### 3. Set WSL Version (Optional)
```powershell
wsl --set-version <DistroName> 2
```
Replace `<DistroName>` with your installed Linux distro (e.g., `Ubuntu`) if you want to switch between WSL 1 and WSL 2.

### 4. Verify Installation
```powershell
wsl -l -v
```
This command shows a list of installed distros and their associated WSL version.

## Conclusion

WSL offers an ideal environment for web development, scripting, and cloud-native tools right within Windows. Whether you're a beginner learning Linux or a seasoned developer needing a native-like Unix environment on Windows, WSL is a powerful addition to your workflow. Choose WSL 2 for compatibility, or WSL 1 for speed — and get coding!