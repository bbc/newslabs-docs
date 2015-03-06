# Documentation for BBC News Labs

This repository is intended as a place for public facing documentation for the BBC News Labs APIs, #newsHACK events (etc.) hosted at http://docs.bbcnewslabs.co.uk

## Adding/Updating Documentation

To modify the website, just edit or create new Markdown files in the "docs" directory and push to the repository - the website at http://docs.bbcnewslabs.co.uk will be automatically updated when you push your changes to the master branch.

Documentation should be written in [GitHub Flavoured Markdown](https://help.github.com/articles/github-flavored-markdown/) which is automatically turned into web based documentation. You can embed HTML inside your Markdown documents.

You can edit `layout.html` file to add items to the navigation menu.

You can add images to the 'docs/img' directory. You can also create new directories in "docs" with Markdown files in them.

## Grunt Tasks

* Run `grunt` to build HTML locally from the Markdown documents in 'docs'. This updates the HTML cache of documentation in the in 'html' directory. You don't have to do this, but it allows you to preview pages before pushing changes to master.
* Run `grunt watch` to have it rebuild the 'html' directory live as you edit the documentation in the "docs" directory.
* The `grunt www` task is used by the server to build the '_www' directory whenever new Markdown files are found/changed in the "docs" directory (this directory is auto-generated on every push to master and is not part of the repo).
