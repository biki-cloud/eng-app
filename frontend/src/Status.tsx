import React, { useState } from 'react';

function Status() {
    const [responseJson, setResponseJson] = useState(null);

    const fetchData = async () => {
        // APIのエンドポイントを指定します
        const url = "http://localhost:8080/status";

        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // 整形されたJSON文字列に変換します
        const formattedJson = JSON.stringify(data, null, 2);

        // @ts-ignore
        setResponseJson(formattedJson);
    };

    return (
        <div className="App">
            <h1>Status</h1>
            <button onClick={fetchData}>Fetch Data</button>
            {responseJson && (
                <div>
                    <h2>Formatted JSON Response</h2>
                    <pre>{responseJson}</pre>
                </div>
            )}
        </div>
    );
}

export default Status;
