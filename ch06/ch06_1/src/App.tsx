import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./pages/Board";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup";

function App() {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <DndProvider backend={HTML5Backend}>
                <BrowserRouter>
                    <RoutesSetup />
                </BrowserRouter>
            </DndProvider>
        </ReduxProvider>
    );
}

export default App;
