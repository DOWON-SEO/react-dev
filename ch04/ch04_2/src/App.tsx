import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HighOrderCallback from "./pages/HighOrderCallback";
import CallBack from "./pages/Callback";
import UseOrCreateTest from "./pages/UseOrCreateTest";

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <HighOrderCallback></HighOrderCallback>
            <CallBack></CallBack>
            <UseOrCreateTest></UseOrCreateTest>
        </main>
    );
}

export default App;
