import { Avatar, Title, Div } from "../components";
import * as D from "../data";

export default function AvatarTest() {
    const Avatars = D.range(0,10).map((index) => {
        return <Avatar key={index} src={D.randomImage()} className="border-4 border-white -ml-6 inline-block"/>
    })
    console.log(Avatars);
    return (
        <section className="mt-4">
            <Title>AvatarTest</Title>
            <Div className="mt-4">
                {Avatars}
            </Div>
        </section>
    )
}