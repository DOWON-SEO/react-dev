import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";
import "./App.css";
import FetchTest from "./pages/FetchTest";
import ErrorMessageTest from "./pages/ErrorMessageTest";
import LoadingTest from "./pages/LoadingTest";
import LoggerTest from "./pages/LoggerTest";

function App() {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <main className="p-8">
                <FetchTest />
                <ErrorMessageTest />
                <LoadingTest />
                <LoggerTest />
            </main>
        </ReduxProvider>
    );
}

export default App;
