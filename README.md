# node-red-contrib-plugin-codecompletion

This plugin enables the code completion in the code editor of function nodes.
While typing code, the editor will automatically suggests the code based on the existing code.
The user can accept and insert the suggested code by simply pressing the tab key.

<img width="1440" alt="fizzbuzz" src="https://github.com/user-attachments/assets/1611a5a3-bb8e-41a1-8f29-2b747a2f88e5">

## Setting up
Since this plugin uses Ollama, users need to install it in advance.

- For Windows and macOS

  To set up the Ollama environment, you can use the installer provided on the following website.

  https://ollama.com/download

- For Linux
  Run the following command in the terminal.
  ```
  curl -fsSL https://ollama.com/install.sh | sh
  ollama serve
  ```

## Demonstration
Generating FizzBuzz code


https://github.com/user-attachments/assets/b9dabb40-ee5b-47c6-ace5-979d3cb5e03f


