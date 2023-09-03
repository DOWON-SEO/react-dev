import * as L from "./localStorageP";
export const readObjectP = <T extends object>(key: string) =>
    new Promise<T | null>(async (resolve, reject) => {
        try {
            const value = await L.readStringP(key);
            resolve(value ? JSON.parse(value) : null);
        } catch (error) {
            reject(error);
        }
    });

export const writeObjectP = (key: string, value: object) => L.writeItemToStorageP(key, JSON.stringify(value));
