import { Db, MongoClient } from "mongodb";

export type MongoDB = Db;
export type ConnectCallback = (db: MongoDB) => void;

export const ConnectAndUseDB = async (callback: ConnectCallback, dbName: string, mongoUrl: string = "mongodb://localhost:27017") => {
    let connection;
    try {
        connection = await MongoClient.connect(mongoUrl);
        const db: Db = connection.db(dbName);
        callback(db);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
