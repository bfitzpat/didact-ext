// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "didact-ext" is now active!');

	await registerTutorialWithDidact(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function registerTutorialWithDidact(context: vscode.ExtensionContext) {
	try {
		// test to ensure didact is available 
		const extensionId = 'redhat.vscode-didact';
		const didactExt : any = vscode.extensions.getExtension(extensionId);
		if (didactExt) {
			const commandId = 'vscode.didact.register';
			const tutorialName = `Tutorial-from-extension`; // replace this with the name of your integration to appear in the Didact view
			const tutorialPath = path.join(context.extensionPath, `./tutorial/hosted.didact.md`); // replace this path with the location of your Didact file like ./path/to/tutorial.didact.md or ./path/to/tutorial.didact.adoc
			const tutorialUri = vscode.Uri.parse(`file://${tutorialPath}`);
			const tutorialCategory = `didact-ext`; // replace this with the name of the category for your tutorial

			// then pass name, uri, and category
			await vscode.commands.executeCommand(
				commandId,
				tutorialName, 
				tutorialUri,
				tutorialCategory);
		}
	} catch (error) {
		console.log(error);
	}
}