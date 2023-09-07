import { Router } from "express";
import { MongoDB } from "../mongodb";
import { getUserIdFromJwtP } from "./getUserIdFromJwtP";

export function testRouter(...args: any[]) {
    const db: MongoDB = args[0];
    const test = db.collection("test");
    const router = Router();

    router.get("/", async (req, res) => {
        try {
            const userId = await getUserIdFromJwtP(req);
            const findResult = await test.find({}).toArray();
            res.json({ ok: true, body: findResult });
        } catch (error) {
            if (error instanceof Error) res.json({ ok: false, errorMessage: error.message });
        }
    });

    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const userId = await getUserIdFromJwtP(req);
            const findResult = await test.findOne({ id });
            res.json({ ok: true, body: findResult });
        } catch (error) {
            if (error instanceof Error) res.json({ ok: false, errorMessage: error.message });
        }
    });

    router.post("/", async (req, res) => {
        const { body } = req;
        try {
            const userId = await getUserIdFromJwtP(req);
            try {
                await test.drop();
            } catch (error) {}

            const insertResult = await test.insertOne({ id: "1234", ...body });
            const { insertedId } = insertResult;
            const findResult = await test.findOne({ _id: insertedId });
            res.json({ ok: true, body: findResult });
        } catch (error) {
            if (error instanceof Error) res.json({ ok: false, errorMessage: error.message });
        }
    });

    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const { body } = req;
        try {
            const userId = await getUserIdFromJwtP(req);
            const updateResult = await test.findOneAndUpdate({ id }, { $set: body }, { returnDocument: "after" });
            res.json({ ok: true, body: updateResult?.value });
        } catch (error) {
            if (error instanceof Error) res.json({ ok: false, errorMessage: error.message });
        }
    });

    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        try {
            const userId = await getUserIdFromJwtP(req);
            await test.deleteOne({ id });
            res.json({ ok: true });
        } catch (error) {
            if (error instanceof Error) res.json({ ok: false, errorMessage: error.message });
        }
    });

    return router;
}
