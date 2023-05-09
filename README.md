# Asterisk configuration files

<p align="left">
  <img
    src="https://img.shields.io/github/v/release/attilasomogyi/asterisk-configuration-files"
    alt="latest release"
  />
  <img
    src="https://img.shields.io/github/release-date/attilasomogyi/asterisk-configuration-files"
    alt="release date"
  />
  <img
    src="https://img.shields.io/github/languages/top/attilasomogyi/asterisk-configuration-files"
    alt="top languages in the project"
  />
  <img
    src="https://img.shields.io/github/commit-activity/y/attilasomogyi/asterisk-configuration-files"
    alt="commit activity"
  />
  <img
    src="https://img.shields.io/github/contributors/attilasomogyi/asterisk-configuration-files"
    alt="contributors"
  />
</p>

Asterisk Configuration Files offer a method to configure the settings and behavior of the Asterisk Private Branch Exchange system. These files are typically in a .conf format and include settings for Session Initiation Protocol and extensions, among others.

## Getting started

### Installation

#### AlmaLinux

```shell
sudo dnf install asterisk
```

#### Arch Linux

```shell
sudo pacman --sync \
            --refresh \
            --sysupgrade \
            asterisk
```

#### Debian and Ubuntu Linux

```shell
sudo apt update
sudo apt upgrade

sudo apt install asterisk
```

#### OpenWrt

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

### Usage

```shell
git clone --recurse-submodules \
https://github.com/attilasomogyi/asterisk-configuration-files.git

sudo cp -r /etc/asterisk \
           /etc/asterisk-backup-$(date --iso-8601=seconds)

sudo cp asterisk-configuration-files/src/*.conf \
        /etc/asterisk

sudo systemctl restart asterisk
```

## Documentation

Read the [documentation][documentation].

## Support

Read the [support][support].

## Security

Read the [security][security].

## Contributing

Read the [contributing][contributing] guidelines.

### Contributors

<a href="https://github.com/attilasomogyi/asterisk-configuration-files/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=attilasomogyi/asterisk-configuration-files"
    alt="list of the contributors" />
</a>

## License

Read the [license][license].

<img src="https://img.shields.io/github/license/attilasomogyi/asterisk-configuration-files"
  alt="license" />

## Project status

<p>
  <img
    src="https://img.shields.io/github/commit-activity/y/attilasomogyi/asterisk-configuration-files"
    alt="commit activity"
  />
  <img
      src="https://img.shields.io/github/last-commit/attilasomogyi/asterisk-configuration-files"
      alt="last commit"
  />
</p>

[documentation]: https://attilasomogyi.github.io/asterisk-configuration-files/
[support]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/SUPPORT.md
[security]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/SECURITY.md
[contributing]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/CONTRIBUTING.md
[license]: https://github.com/attilasomogyi/asterisk-configuration-files/blob/main/LICENSE
