import * as M from "../mongodb";

const connectCallback = (db: M.MongoDB) => {
    console.log("db", db);
};

const connectTest = () => {
    M.ConnectAndUseDB(connectCallback, "ch07");
};

connectTest();
