import * as M from "../mongodb";

const connectCallback = async (db: M.MongoDB) => {
    try {
        const user = db.collection("user");
        try {
            await user.drop();
        } catch (error) {}

        const jack = await user.insertOne({ name: "Jack", age: 32 });
        console.log("jack", jack);
        const janeAndTom = await user.insertMany([
            { name: "Jane", age: 22 },
            { name: "Tome", age: 11 },
        ]);
        console.log("janeAndTom", janeAndTom);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

const insertTest = () => {
    M.ConnectAndUseDB(connectCallback, "ch07");
};

insertTest();
