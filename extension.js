// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

let terminalItem;
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "bottom-terminal" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	terminalItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	terminalItem.text = `$(terminal) Terminal`;
	terminalItem.command = 'bottom-terminal';
	terminalItem.show();

	let disposable = vscode.commands.registerCommand('bottom-terminal', function () {
		terminalItem.text = `$(loading~spin) Terminal`;
		vscode.window.createTerminal('Terminal').show();
	});

	context.subscriptions.push(vscode.window.onDidOpenTerminal(function () {
		terminalItem.text = `$(terminal) Terminal`;
	}));

	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
function deactivate() {
	// terminalItem = null;
}

module.exports = {
	activate,
	deactivate
}
