import * as M from "../mongodb";

const connectCallback = async (db: M.MongoDB) => {
    try {
        const user = db.collection("user");
        const one = await user.findOne({});
        console.log("one", one);

        const many = await user.find({}).toArray();
        console.log("many", many);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

const findTest = () => {
    M.ConnectAndUseDB(connectCallback, "ch07");
};

findTest();
