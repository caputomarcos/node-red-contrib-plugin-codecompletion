const http = require("http");

module.exports = async function (RED) {
    RED.httpAdmin.post("/completion", RED.auth.needsPermission("completion.write"), async function (req, res) {
        let code = req.body.code;
        code = code.replace("\nreturn msg;", "");

        const data = JSON.stringify({
            "model": "granite-code",
            "raw": true,
            "keep_alive": 1800,
            "options": {
                "temperature": 0.01,
                "num_predict": 1024,
                "stop": [
                    "<fim_prefix>",
                    "<fim_suffix>",
                    "<fim_middle>",
                    "<|endoftext|>",
                    "<file_sep>",
                    "</fim_middle>",
                    "</code>",
                    "\n\n",
                    "\r\n\r\n",
                    "/src/",
                    "#- coding: utf-8",
                    "```",
                    "t.",
                    "\nt",
                    "<file_sep>",
                    "\nfunction",
                    "\nclass",
                    "\nmodule",
                    "\nexport",
                    "\nimport"
                ],
                "num_ctx": 4096
            },
            "prompt": "<fim_prefix>" + code + "<fim_suffix><fim_middle>"
        });

        const options = {
            hostname: "localhost",
            port: 11434,
            path: "/api/generate",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": data.length
            }
        };

        RED.log.info("generating code...");
        const req2 = http.request(options, function (res2) {
            let completion = "";
            res2.on("data", function (chunk) {
                completion += JSON.parse(chunk).response;
            });
            res2.on("end", function () {
                completion = completion.replace(/console.log/g, "node.warn");
                res.json({ "completion": completion });
            });
        });

        req2.on("error", function (error) {
            RED.log.info("Failed to connect to Ollama server: " + error);
        });

        req2.write(data);
        req2.end();
    });

    RED.plugins.registerPlugin("completion", { type: "completion" });
};