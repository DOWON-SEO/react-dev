import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ValidatableInputTest from "./pages/ValidatableInputTest";
import ForwadRefTest from "./pages/ForwardRefTest";
import InputValueTest from "./pages/InputValueTest";
import InputFocusTest from "./pages/InputFocusTest";
import ClickTest from "./pages/ClickTest";
import FileDrop from "./pages/FileDrop";

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <ValidatableInputTest />
            <ForwadRefTest />
            <InputValueTest />
            <InputFocusTest />
            <FileDrop />
            <ClickTest />
        </main>
    );
}

export default App;
