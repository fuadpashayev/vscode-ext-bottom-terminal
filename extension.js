const vscode = require("vscode");

function activate(context) {
  const terminalItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  terminalItem.text = `$(terminal) Terminal`;
  terminalItem.tooltip = "Toggle Terminal";
  terminalItem.command = "bottom-terminal";
  terminalItem.show();

  const disposable = vscode.commands.registerCommand(
    "bottom-terminal",
    function () {
      vscode.commands.executeCommand("workbench.action.togglePanel");
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
