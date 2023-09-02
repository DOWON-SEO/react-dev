import { PropsWithChildren } from "react";
import { Droppable } from "react-beautiful-dnd";

export type CardDroppableProps = {
    droppableId: string;
};

export function CardDroppable({ droppableId, children }: PropsWithChildren<CardDroppableProps>) {
    return (
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col p-2">
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
