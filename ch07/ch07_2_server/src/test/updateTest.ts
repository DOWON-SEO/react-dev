import * as M from "../mongodb";

const connectCallback = async (db: M.MongoDB) => {
    try {
        const user = db.collection("user");
        await user.updateOne({ name: { $regex: /^J.*$/ } }, { $set: { name: "John" }, $inc: { age: 10 } });
        const updateOneResult = await user.find({}).toArray();
        console.log("updateOneResult", updateOneResult);

        await user.updateMany({ name: { $regex: /^J.*$/ } }, { $inc: { age: 10 } });
        const updateManyResult = await user.find({}).toArray();
        console.log("updateManyResult", updateManyResult);

        const findOneResult = await user.findOneAndUpdate({ name: "John" }, { $set: { age: 66 } }, { returnDocument: "after" });
        console.log("findOneResult", findOneResult);
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};

const updateTest = () => {
    M.ConnectAndUseDB(connectCallback, "ch07");
};

updateTest();
