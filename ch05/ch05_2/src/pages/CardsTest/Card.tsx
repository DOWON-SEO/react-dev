import { Avatar, Div, Icon } from "../../components";
import { ICard } from "../../data";

export type UserCardProps = {
    card: ICard;
    onRemove?: () => void;
};

export default function Card({ card, onRemove }: UserCardProps) {
    const { image, writer } = card;
    const { avatar, name, jobTitle } = writer;

    return (
        <Div className="m-2 border shadow-lg rounded-xl" width="10rem">
            <Div src={image} className="relative h-20">
                <Icon name="remove" className="absolute right-1 top-1 btn-primary btn-xs" onClick={onRemove}></Icon>
            </Div>
            <Div className="flex flex-col p-2">
                <Div minHeight="4rem" height="4rem" maxHeight="4rem">
                    <Div className="flex flex-row items-center">
                        <Avatar src={avatar} size="2rem" />
                        <Div className="ml-2">
                            <p className="text-xs font-bold">{name}</p>
                            <p className="text-xs text-gray-500">{jobTitle}</p>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}
