import express from "express";
import cors from "cors";
import { setupRouters } from "./setupRouters";

export const createExpressApp = (...args: any[]) => {
    const app = express();

    app.use(cors());
    app.use((req, res, next) => {
        console.log(`url='${req.url}', method=${req.method}`);
        next();
    });

    app.use(express.json());
    app.use(express.static("public"));

    app.get("/", (req, res) => {
        res.json({ messages: "Hello express World!!" });
    });

    return setupRouters(app, ...args);
};
