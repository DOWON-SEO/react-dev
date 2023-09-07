import * as M from "../mongodb";

const connectCallback = async (db: M.MongoDB) => {
    try {
        const user = db.collection("user");

        const deleteOneResult = await user.deleteOne({ name: { $regex: /^J.*$/ } });
        console.log("deleteOneResult", deleteOneResult);

        const deleteManyResult = await user.deleteMany({ name: { $regex: /^J.*$/ } });
        console.log("deleteManyResult", deleteManyResult);

        const deleteAllResult = await user.deleteMany({});
        console.log("deleteAllResult", deleteAllResult);

        const userDocuments = await user.find({}).toArray();
        console.log("userDocuments", userDocuments);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

const deleteTest = () => {
    M.ConnectAndUseDB(connectCallback, "ch07");
};

deleteTest();
