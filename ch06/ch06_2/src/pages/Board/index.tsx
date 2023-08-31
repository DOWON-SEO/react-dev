import { useMemo, useRef } from "react";
import CreateListFrom from "./CreateListForm";

import BoardList from "../BoardList";
import { useLists } from "../../store/useLists";
import { useDrop } from "react-dnd";
import { ListDroppable } from "../../components";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
    const { lists, onRemoveList, onCreateList, onMoveList, onDragEnd } = useLists();

    const children = useMemo(() => lists.map((list, index) => <BoardList key={list.uuid} list={list} onRemoveList={onRemoveList(list.uuid)} index={index} onMoveList={onMoveList} />), [lists, onRemoveList, onMoveList]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">Board</h2>
            <DragDropContext onDragEnd={onDragEnd}>
                <ListDroppable className="flex flex-row p-2 mt-4">
                    <div className="flex flex-wrap p-2 mt-4">
                        {children}
                        <CreateListFrom onCreateList={onCreateList} />
                    </div>
                </ListDroppable>
            </DragDropContext>
        </section>
    );
}
