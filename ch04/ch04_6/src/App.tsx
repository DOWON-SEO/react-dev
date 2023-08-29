import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveContextTest from "./pages/ResponsiveContextTest";
import { ResponsiveProvider } from "./contexts";

function App() {
    return (
        <ResponsiveProvider>
            <main>
                <h1>테스트</h1>
                <ResponsiveContextTest />
            </main>
        </ResponsiveProvider>
    );
}

export default App;
