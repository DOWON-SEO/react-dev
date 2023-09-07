import { createExpressApp } from "./express";
import { makeDir } from "./utils";
import { getPublicDirPath } from "./config";
import { ConnectAndUseDB, MongoDB } from "./mongodb";

makeDir(getPublicDirPath());

const HOSTNAME = "localhost";
const PORT = 4000;

const connectCallback = (db: MongoDB) => {
    createExpressApp(db).listen(PORT, () => console.log(`connect http://${HOSTNAME}:${PORT}`));
};

ConnectAndUseDB(connectCallback, "ch07");
