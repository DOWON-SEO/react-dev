import bcrypt from "bcrypt";
const saltRounds = 10;

export function hashPasswordP(password: string) {
    return new Promise<string>(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
}

export function comparePasswordP(password: string, hashedPassword: string) {
    return new Promise<boolean>(async (resolve, reject) => {
        try {
            const result = await bcrypt.compare(password, hashedPassword);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
