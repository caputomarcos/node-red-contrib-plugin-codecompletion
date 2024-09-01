# node-red-contrib-plugin-codecompletion

Code completion plugin for Node-RED's function nodes

This plugin enables the code completion in the code editor of function nodes.
While typing code, the editor automatically suggests the code based on the existing code.
By simply pressing the tab key, the user can accept and insert the suggested code.

![](fizzbuzz.png)

## Setup
As this plugin uses Ollama, users need to install it in advance.

- For Windows and macOS
  You can use the installer to set up the Ollama environment.
  https://ollama.com/download

- For Linux
  Run the following command in the terminal.
  ```
  curl -fsSL https://ollama.com/install.sh | sh
  ```
## Demonstration
Generating FizzBuzz code
