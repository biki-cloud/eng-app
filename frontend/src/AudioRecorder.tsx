import React, { useState, useRef } from "react";

const AudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState("");
    const mediaRecorder = useRef<MediaRecorder | null>(null);

    const startRecording = async () => {
        if (!navigator.mediaDevices) {
            alert("getUserMedia not supported on your browser!");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (e) => {
            setAudioURL(URL.createObjectURL(e.data));
        };

        mediaRecorder.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setRecording(false);
        }
    };

    return (
        <div>
            <button onClick={recording ? stopRecording : startRecording}>
                {recording ? "Stop Recording" : "Start Recording"}
            </button>
            {audioURL && (
                <div>
                    <h3>Recorded Audio:</h3>
                    <audio src={audioURL} controls />
                </div>
            )}
        </div>
    );
};

export default AudioRecorder;
