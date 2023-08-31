import { useDispatch } from "react-redux";
import { List } from "../../store/commonTypes";
import { useSelector } from "react-redux";
import { Appstate } from "../../store";
import Icon from "../../theme/daisyui/Icon";
import { useCards } from "../../store/useCards";
import { useCallback, useMemo } from "react";
import ListCard from "../ListCard";
import { CardDroppable, Div, ListDraggable, MoveFunc } from "../../components";
import { useNavigate } from "react-router-dom";

export type BoardListProps = {
    list: List;
    onRemoveList?: () => void;
    index: number;
    onMoveList: MoveFunc;
};

export default function BoardList({ list, onRemoveList, index, onMoveList, ...props }: BoardListProps) {
    const { cards, onPrependCard, onAppendCard, onRemoveCard } = useCards(list.uuid);
    const navigate = useNavigate();
    const cardClicked = useCallback(
        (cardid: string) => () => {
            navigate(`/board/card/${cardid}`);
        },
        [navigate]
    );
    const children = useMemo(() => cards.map((card, index) => <ListCard key={card.uuid} card={card} onRemove={onRemoveCard(card.uuid)} draggableId={card.uuid} index={index} onClick={cardClicked(card.uuid)} />), [cards, onRemoveCard]);
    return (
        <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
            <Div {...props} className="p-2 m-2 border border-gray-300 rounded-lg" minWidth="13rem">
                <div className="flex justify-between mb-2">
                    <p className="w-32 text-sm font-bold underline line-clamp-1 ">{list.title}</p>
                </div>
                <div className="flex justify-between ml-2">
                    <Icon name="remove" className="btn-error btn-xs" onClick={onRemoveList} />
                    <div className="flex">
                        <Icon name="post_add" className="ml-2 btn-success btn-xs" onClick={onPrependCard} />
                        <Icon name="playlist_add" className="ml-2 btn-success btn-xs" onClick={onAppendCard} />
                    </div>
                </div>
                <CardDroppable droppableId={list.uuid}>{children}</CardDroppable>
            </Div>
        </ListDraggable>
    );
}
