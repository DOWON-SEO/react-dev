import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useMemo } from "react";

const initializeStore = () => configureStore({ reducer: rootReducer, middleware: [] });

export function useStore() {
    return useMemo(() => initializeStore(), []);
}
