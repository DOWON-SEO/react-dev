import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrayState from "./pages/ArrayState";
import ObjectState from "./pages/ObjectState";
import BasicForm from "./pages/BasicForm";
import HigherOrderRadioInputTest from "./pages/HigherOrderRadioInputTest";
import RadioInputTest from "./pages/RadioInputTest";
import ShowHideModal from "./pages/ShowHideModal";
import InputTest from "./pages/InputTest";
import NumberState from "./pages/NumberState";

function App() {
    return (
        <main>
            <h1>테스트</h1>
            <ArrayState></ArrayState>
            <ObjectState></ObjectState>
            <BasicForm></BasicForm>
            <HigherOrderRadioInputTest></HigherOrderRadioInputTest>
            <RadioInputTest></RadioInputTest>
            <ShowHideModal></ShowHideModal>
            <InputTest></InputTest>
            <NumberState></NumberState>
        </main>
    );
}

export default App;
