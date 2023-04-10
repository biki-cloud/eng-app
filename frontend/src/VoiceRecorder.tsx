import React, {useState, useRef} from "react";

interface CustomSpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
}

const VoiceRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [transcript, setTranscript] = useState("");
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const recognition = useRef<SpeechRecognition | null>(null);

    const startRecording = async () => {
        if (!navigator.mediaDevices || !("webkitSpeechRecognition" in window)) {
            alert("getUserMedia or webkitSpeechRecognition not supported on your browser!");
            return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
        mediaRecorder.current = new MediaRecorder(stream);

        recognition.current = new (window as any).webkitSpeechRecognition();
        // @ts-ignore
        recognition.current.continuous = true;
        // @ts-ignore
        recognition.current.interimResults = true;
        // @ts-ignore
        recognition.current.lang = "en-US";

        // @ts-ignore
        recognition.current.onresult = (event: CustomSpeechRecognitionEvent) => {
            let interimTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const text = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    setTranscript((prevTranscript) => prevTranscript + " " + text);
                } else {
                    interimTranscript += text;
                }
            }
        };

        // @ts-ignore
        recognition.current.start();
        mediaRecorder.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
        }
        if (recognition.current) {
            recognition.current.stop();
        }
        setRecording(false);
    };

    return (
        <div>
            <button onClick={recording ? stopRecording : startRecording}>
                {recording ? "Stop Recording" : "Start Recording"}
            </button>
            <div>
                <h3>Transcript:</h3>
                <p id="recorded_message">{transcript}</p>
            </div>
        </div>
    );
};

export default VoiceRecorder;
