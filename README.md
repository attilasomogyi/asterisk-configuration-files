# Asterisk configuration files

Asterisk Configuration Files offer a method to configure the settings and behavior of the Asterisk Private Branch Exchange system.
These files are typically in a .conf format and include settings for Session Initiation Protocol and extensions, among others.

<p align="left">
  <img
    src="https://img.shields.io/github/v/release/attilasomogyi/asterisk-configuration-files"
    alt="GitHub release latest SemVer"
  />
  <img
    src="https://img.shields.io/github/release-date/attilasomogyi/asterisk-configuration-files"
    alt="GitHub Release Date"
  />
  <img
    src="https://img.shields.io/github/languages/top/attilasomogyi/asterisk-configuration-files"
    alt="GitHub top language"
  />
  <img
    src="https://img.shields.io/gitlab/coverage/attilasomogyi/asterisk-configuration-files/main"
    alt="Gitlab code coverage"
  />
  <img
    src="https://img.shields.io/github/languages/code-size/attilasomogyi/asterisk-configuration-files"
    alt="GitHub code size in bytes"
  />
  <img
    src="https://img.shields.io/github/repo-size/attilasomogyi/asterisk-configuration-files"
    alt="GitHub repository size"
  />
  <img
    src="https://img.shields.io/github/downloads/attilasomogyi/asterisk-configuration-files/total"
    alt="GitHub all releases"
  />
  <img
    src="https://img.shields.io/github/downloads/attilasomogyi/asterisk-configuration-files/latest/total"
    alt="GitHub release latest by SemVer"
  />
  <img
    src="https://img.shields.io/github/commit-activity/y/attilasomogyi/asterisk-configuration-files"
    alt="GitHub commit activity"
  />
  <img
    src="https://img.shields.io/github/contributors/attilasomogyi/asterisk-configuration-files"
    alt="GitHub contributors"
  />
</p>

## Installation

### AlmaLinux

```shell
sudo dnf install asterisk
```

### Arch Linux

```shell
sudo pacman --sync --refresh --sysupgrade asterisk
```

### Debian and Ubuntu Linux

```shell
sudo apt update
sudo apt upgrade
sudo apt install asterisk
```

### OpenWrt

```shell
opkg update
opkg install \
  asterisk \
  asterisk-pjsip \
  asterisk-bridge-simple \
  asterisk-codec-alaw \
  asterisk-codec-ulaw \
  asterisk-res-rtp-asterisk
```

## Usage

```shell
git clone --recurse-submodules https://github.com/attilasomogyi/asterisk-configuration-files.git
sudo cp -r /etc/asterisk /etc/asterisk-backup-$(date --iso-8601=seconds)
sudo cp asterisk-configuration-files/src/*.conf /etc/asterisk
sudo systemctl restart asterisk
```

### [Documentation](https://attilasomogyi.github.io/asterisk-configuration-files)

## [Contributing](https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/CONTRIBUTING.md)

<a href="https://github.com/attilasomogyi/asterisk-configuration-files/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=attilasomogyi/asterisk-configuration-files" />
</a>

## [License](https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/LICENSE)

<p>
  <img
    src="https://img.shields.io/github/license/attilasomogyi/asterisk-configuration-files"
    alt="GitHub"
  />
<p/>

## Project status

<p>
  <img
    src="https://img.shields.io/github/commit-activity/y/attilasomogyi/asterisk-configuration-files"
    alt="GitHub commit activity"
  />
  <img
      src="https://img.shields.io/github/last-commit/attilasomogyi/asterisk-configuration-files"
      alt="GitHub last commit"
  />
</p>
