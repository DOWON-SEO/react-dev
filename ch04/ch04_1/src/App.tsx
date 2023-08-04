import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./pages/Clock";
import { useClock } from "./hooks";

function App() {
    const today = useClock();
    return (
        <main>
            <h1>테스트</h1>
            <Clock today={today} />
        </main>
    );
}

export default App;
