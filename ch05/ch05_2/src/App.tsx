import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";
import "./App.css";
import CardsTest from "./pages/CardsTest";
import RemoteUserTest from "./pages/RemoteUserTest";
import CounterTest from "./pages/CounterTest";
import ClockTest from "./pages/ClockTest";

function App() {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <main className="p-8">
                <CardsTest />
                <RemoteUserTest />
                <CounterTest />
                <ClockTest />
            </main>
        </ReduxProvider>
    );
}

export default App;
