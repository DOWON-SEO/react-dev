export type IRandomUser = {
    email: string;
    name: { title: string; first: string; last: string };
    picture: { large: string };
};

export function convertRandomUser(result: unknown) {
    const { email, name, picture } = result as IRandomUser;
    return { email, name, picture };
}

export function fetchRandomUser(): Promise<IRandomUser> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch("https://randomuser.me/api");
            const result = await response.json();

            console.log(result);

            const { results } = result as { results: IRandomUser[] };
            resolve(convertRandomUser(results[0]));
        } catch (error) {
            reject(error);
        }
    });
}
