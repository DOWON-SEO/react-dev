import { PropsWithChildren } from "react";
import { Draggable } from "react-beautiful-dnd";

export type CardDraggableProps = {
    draggableId: string;
    index: number;
};

export function CardDraggable({ draggableId, index, children }: PropsWithChildren<CardDraggableProps>) {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        {children}
                    </div>
                );
            }}
        </Draggable>
    );
}
