import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonTest from "./pages/ButtonTest";
import InputTest from "./pages/InputTest";
import ModalTest from "./pages/ModalTest";

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <ButtonTest></ButtonTest>
            <InputTest></InputTest>
            <ModalTest></ModalTest>
        </main>
    );
}

export default App;
