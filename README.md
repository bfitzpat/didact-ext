# didact-ext README

This is the README for your extension "didact-ext". 

## Testing New Versions of Didact

To test a new version of Didact with this extension (an unpublished version), you will need to create a *.vsix file and install it.

To build the extension vsix, you have to have vsce installed.

### Installation

Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

```bash
npm install -g vsce
```

### Building vsix
And then you can do:

```
$ cd vscode-didact
$ vsce package
# vscode-didact*.vsix generated
```

### Installing the VSIX

(See `Install from a VSIX` in the VS Code docs.)[https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix]

### When you are done

Make sure you uninstall the Didact extension when you are done and then install it from the latest published version in the extension marketplace. 

* To uninstall the extension, see (Uninstall an extension)[https://code.visualstudio.com/docs/editor/extension-gallery#_uninstall-an-extension]
* To re-install Didact, see (Search for an extension)[https://code.visualstudio.com/docs/editor/extension-gallery#_search-for-an-extension] and type `Didact` in the search field to find it



