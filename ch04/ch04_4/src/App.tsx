import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchTest from "./pages/FetchTest";
import WindowResizeTest from "./pages/WindowResizeTest";
import ClassLifecycle from "./pages/ClassLifecycle";

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <FetchTest />
            <WindowResizeTest />
            <ClassLifecycle />
        </main>
    );
}

export default App;
