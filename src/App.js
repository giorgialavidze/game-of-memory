import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import TodoList from "./TodoList";

function App() {
  return (
    <>
    <TodoList/>
    <AudioRecorder onRecordingComplete={<button>Clear Complate</button>} />
    <input type="text" />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Complate</button>
    <div> left to do</div>

    </>
  )
}

export default App;
