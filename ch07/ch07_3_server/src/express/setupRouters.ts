import { Express } from "express";
import * as R from "../routers";

export const setupRouters = (app: Express, ...args: any[]): Express => {
    app.use("/test", R.testRouter(...args));

    return app;
};
