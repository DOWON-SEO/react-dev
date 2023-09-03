import { useDispatch } from "react-redux";
import { Card, UUID } from "./commonTypes";
import { useSelector } from "react-redux";
import { Appstate } from "./AppState";
import { useCallback } from "react";
import * as D from "../data";
import * as C from "./cardEntities";
import * as LC from "./listidCardidOrders";

export const useCards = (listid: UUID) => {
    const dispatch = useDispatch();
    const cards = useSelector<Appstate, Card[]>(({ cardEntities, listidCardidOrders }) => listidCardidOrders[listid].map((uuid) => cardEntities[uuid]));

    const onPrependCard = useCallback(() => {
        const card = D.makeRandomCard();
        dispatch(C.addCard(card));
        dispatch(LC.prependCardidToListid({ listid, cardid: card.uuid }));
    }, [dispatch, listid]);

    const onAppendCard = useCallback(() => {
        const card = D.makeRandomCard();
        dispatch(C.addCard(card));
        dispatch(LC.appendCardidToListid({ listid, cardid: card.uuid }));
    }, []);

    const onRemoveCard = useCallback(
        (uuid: UUID) => () => {
            dispatch(C.removeCard(uuid));
            dispatch(LC.removeCardIdFromListId({ listid: listid, cardid: uuid }));
        },
        [dispatch, listid]
    );

    return { cards, onPrependCard, onAppendCard, onRemoveCard };
};
