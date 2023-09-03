import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useMemo } from "react";
import logger from "redux-logger";

const initializeStore = () => {
    const middleware = [];
    if (process.env.NODE_ENV !== "production") middleware.push(logger);
    const store = configureStore({ reducer: rootReducer, middleware: middleware });
    return store;
};

export function useStore() {
    const store = useMemo(() => initializeStore(), []);
    return store;
}
