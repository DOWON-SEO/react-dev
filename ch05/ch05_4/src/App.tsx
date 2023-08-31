import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./pages/Board";

function App() {
    const store = useStore();
    return (
        <ReduxProvider store={store}>
            <DndProvider backend={HTML5Backend}>
                <main className="p-8">
                    <Board />
                </main>
            </DndProvider>
        </ReduxProvider>
    );
}

export default App;
