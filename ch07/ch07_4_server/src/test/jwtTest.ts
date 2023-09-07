import * as U from "../utils";

async function jwtNomalTest() {
    try {
        const jwt = await U.jwtSignP({ name: "Jack", age: 32 });
        console.log("jwt", jwt);
        const decoded = await U.jwtVerifyP(jwt);
        console.log("decoded", decoded);
    } catch (error) {
        if (error instanceof Error) console.log("error", error.message);
    }
}

async function jwtExceptionTest() {
    try {
        const decoded = await U.jwtVerifyP("1234");
        console.log("decoded", decoded);
    } catch (error) {
        if (error instanceof Error) console.log("error", error.message);
    }
}

async function jwtExpireTest() {
    const jwt = await U.jwtSignP({ name: "Jack", age: 32 }, { expiresIn: "1s" });
    const id = setTimeout(async () => {
        try {
            const decoded = await U.jwtVerifyP(jwt);
            console.log("decoded", decoded);
        } catch (error) {
            if (error instanceof Error) console.log("error", error.message);
        }
    }, 2000);
}

jwtNomalTest().then(jwtExceptionTest).then(jwtExpireTest);
