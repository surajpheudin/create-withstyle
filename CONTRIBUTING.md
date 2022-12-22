# Create-WithStyle Contributing Guide

Hi! We're really excited that you're interested in contributing to _create_withstyle_. Before submitting your contribution, please read through the following guide.

# Semantic Versioning

_create-withstyle_ follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes. When we make breaking changes, we also introduce deprecation warnings in a minor version so that our users learn about the upcoming changes and migrate their code in advance.

# Repo Setup

The create-withstyle repo uses npm workspaces. The package manager used to install and link dependencies must be npm.

Your can clone your forked repo of this repository and follow following command to get started:

1. Run `npm install` in root folder.
2. Run `npm run dev` in root folder.

To test this package:

1. Run `npm run build` in root folder.
2. Run `npm preview` in root folder.
