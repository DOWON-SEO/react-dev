import { Jwt, JwtPayload, SignOptions, VerifyOptions, sign, verify } from "jsonwebtoken";

const secret = "very important secret";

export function jwtSignP(payload: string | Buffer | object, options: SignOptions = {}) {
    return new Promise<string>((resolve, reject) => {
        try {
            const jwt = sign(payload, secret, options);
            resolve(jwt);
        } catch (error) {
            reject(error);
        }
    });
}

export function jwtVerifyP(token: string, options: VerifyOptions = {}) {
    return new Promise<Jwt | JwtPayload | string>((resolve, reject) => {
        try {
            const decoded = verify(token, secret, options);
            resolve(decoded);
        } catch (error) {
            reject(error);
        }
    });
}
