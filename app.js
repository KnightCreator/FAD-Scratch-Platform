document.addEventListener("DOMContentLoaded", () => {
  const workspace = Blockly.inject('blocklyDiv',  {
    toolbox: document.getElementById('toolbox'),

    scrollbars: true,
  });

  document.getElementById('runCode').addEventListener('click', () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log('Generated Code:/n', code);
  });
});
