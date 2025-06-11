---
title: "WSL1 vs WSL2"
date: "2025-06-10"
excerpt: "Understanding the key differences between WSL1 and WSL2, especially how operating systems are installed and run in each version."
readTime: 6
tags: ["wsl", "windows", "linux", "development", "virtualization"]
---


The **Windows Subsystem for Linux** (WSL) allows developers to run Linux distributions directly on Windows without the overhead of a traditional virtual machine. Since its release, WSL has seen two major versions: **WSL1** and **WSL2**. Understanding their differences, especially in how the operating systems are installed and run, can help you choose the right environment for your development needs.

## WSL1 Overview

WSL1 was the initial implementation that provided a compatibility layer translating Linux system calls to Windows. It allowed users to run Linux binaries natively, but with some limitations related to performance and system call compatibility.

## WSL2 Overview

WSL2 introduced a full Linux kernel running inside a lightweight virtual machine, vastly improving system call compatibility and performance. This approach uses a real Linux kernel, which changes how the OS is installed and managed.

## Key Differences in OS Installation

### WSL1 Installation

When installing WSL1:

- The Linux distribution is installed as a collection of files within the Windows filesystem.
- No full Linux kernel is included; Windows handles system calls translation.
- Installation is generally faster and consumes less disk space.
- Linux files reside under `%LOCALAPPDATA%\Packages\` in a distro-specific folder.

### WSL2 Installation

WSL2 installation differs significantly:

- A lightweight utility VM runs the Linux kernel, requiring virtualization features enabled in Windows.
- The Linux filesystem runs inside a virtual hard disk (VHD) file stored on your Windows drive.
- The Linux kernel is shipped by Microsoft and updated via Windows Update.
- This VM-based approach means improved compatibility but requires a bit more disk space and setup.

## Choosing Between WSL1 and WSL2

Consider WSL1 if you need faster startup times and less disk usage, especially on older hardware or in environments where virtualization isn't available.

WSL2 is recommended for most users, thanks to its full Linux kernel support and better compatibility with tools like Docker and Kubernetes.

## How to Install and Switch Between WSL Versions

1. Enable WSL and the Virtual Machine Platform feature in Windows:

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. Install your preferred Linux distribution from the Microsoft Store.
Or if you prefer you could you the terminal.

```bash
wsl --install -d Ubuntu
wsl --install -d kali-linux

```

3. Set the default WSL version:

```
wsl --set-default-version 2
```

4. Convert an existing distro to WSL2:

```
wsl --set-version <distro-name> 2
```

## Summary

WSL1 and WSL2 both serve to bring Linux to Windows users, but their architectural differences affect installation, performance, and compatibility. Choosing the right version depends on your use case, hardware capabilities, and the software you intend to run.

By understanding these differences, you can better leverage the power of WSL to streamline your development workflow on Windows.