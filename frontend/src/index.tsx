import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Status from './Status';
import Api from './Api';
import AudioRecorder from "./AudioRecorder";
import reportWebVitals from './reportWebVitals';
import VoiceRecorder from "./VoiceRecorder";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <VoiceRecorder/>
        <AudioRecorder/>
        {/*<App/>*/}
        <Api/>
        <Status/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
