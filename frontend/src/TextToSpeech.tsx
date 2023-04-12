// TextToSpeech.jsx

import React, { useState } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');

    // const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setText(event.target.value);
    // };

    const speak = () => {

        // @ts-ignore
        const text = document.getElementById("api-response").textContent;
        // @ts-ignore
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <h2>Text to Speech</h2>
            {/*<textarea*/}
            {/*    placeholder="Type your text here..."*/}
            {/*    value={text}*/}
            {/*    onChange={handleTextChange}*/}
            {/*    rows={5}*/}
            {/*/>*/}
            <button onClick={speak}>Speak</button>
        </div>
    );
};

export default TextToSpeech;
