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

	await installAllTutorials(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function installAllTutorials(context : vscode.ExtensionContext) {
	let tutorialList = {
		"tutorials": [
			{"name": "Tutorial-from-extension", "extpath" : "./tutorial/hosted.didact.md", "category": "didact-ext"},
			{"name": "TOC-example-from-extension", "extpath" : "./tableofcontents/root-toc.didact.md", "category": "didact-ext"},
			{"name": "table-example-from-extension", "extpath" : "./dep-table/dep-table.didact.md", "category": "didact-ext"}
		]
	};

	tutorialList.tutorials.forEach( async tutorial => {
		await registerTutorialWithDidact(context, tutorial.name, tutorial.extpath, tutorial.category);
	});
}

async function registerTutorialWithDidact(context: vscode.ExtensionContext, name : string, extpath : string, category : string) {
	try {
		// test to ensure didact is available 
		const extensionId = 'redhat.vscode-didact';
		const didactExt : any = vscode.extensions.getExtension(extensionId);
		if (didactExt) {
			const commandId = 'vscode.didact.register';
			const tutorialPath = path.join(context.extensionPath, extpath);
			const tutorialUri = vscode.Uri.parse(`file://${tutorialPath}`);

			// then pass name, uri, and category
			await vscode.commands.executeCommand(commandId,	name, tutorialUri, category);
		}
	} catch (error) {
		console.log(error);
	}
}
