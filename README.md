# Documentation for BBC News Labs

This repository is intended as a place for public facing documentation for the BBC News Labs APIs, events, etc.

## Quick Start

You can just add new Markdown files (or folders) to the `docs` directory and push to the repository and website at http://docs.bbcnewslabs.co.uk will be automatically updated.

Documentation should be written in [GitHub Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown/) which is automatically turned into web based documentation. You can embed HTML inside your Markdown documents.

You can edit `layout.html` file to add items to the navigation menu.

## Grunt Tasks

* Run `grunt` to build HTML locally from the Markdown documents in 'docs' (this updates the HTML cache of documentation in the in 'html' directory).
* Run `grunt watch` to have it rebuild the 'html' directory live as you edit the documentation in 'docs'.
* The `grunt www` task is used by the server to build the '_www' directory whenever new Markdown files are found/changed inthe "docs" directory.
* The documentation is hosted at http://docs.bbcnewslabs.co.uk

