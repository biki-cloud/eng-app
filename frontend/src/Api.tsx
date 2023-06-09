import React, { useState } from 'react';

function Api() {
    const [responseJson, setResponseJson] = useState(null);

    const fetchData = async () => {
        // APIのエンドポイントを指定します
        const promptElement = document.getElementById("recorded_message");
        // @ts-ignore
        const promptText = promptElement.textContent;
        console.log("promptText: " + promptText);
        // @ts-ignore
        const encodedPromptText = encodeURIComponent(promptText);
        // const url = "http://localhost:8080/gpt-api?prompt=hello";
        const url = `http://localhost:8080/gpt-api?prompt=${encodedPromptText}`;
        // const url = "http://localhost:8080/status";

        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // @ts-ignore
        document.getElementById("api-response").textContent = data["choices"][0]["message"]["content"]

        // 整形されたJSON文字列に変換します
        // const formattedJson = JSON.stringify(data, null, 2);

        // @ts-ignore
        // setResponseJson(formattedJson);
    };

    return (
        <div className="App">
            <h1>Chat GPT API</h1>
            <button onClick={fetchData}>Fetch Data</button>
            {responseJson && (
                <div>
                    <h2>Formatted JSON Response</h2>
                    {/*<pre>{responseJson}</pre>*/}
                </div>
            )}
            <p id="api-response">api response</p>
        </div>
    );
}

export default Api;
