export {};

declare global {
    interface Window {
        SpeechRecognition: typeof SpeechRecognition;
    }
}
