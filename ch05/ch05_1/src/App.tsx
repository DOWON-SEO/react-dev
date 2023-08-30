import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import UseReducerClock from "./pages/UseReducerClock";
import ReduxClock from "./pages/ReduxClock";
import { useStore } from "./store";

function App() {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <main className="p-8">
                <h1>테스트</h1>
                <UseReducerClock />
                <ReduxClock />
            </main>
        </ReduxProvider>
    );
}

export default App;
