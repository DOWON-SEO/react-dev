import { Express } from "express";
import * as R from "../routers";

export const setupRouters = (app: Express, ...args: any[]): Express => {
    app.use("/test", R.testRouter(...args));
    app.use("/auth", R.authRouter(...args));

    return app;
};
