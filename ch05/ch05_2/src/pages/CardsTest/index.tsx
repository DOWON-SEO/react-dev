import { useDispatch, useSelector } from "react-redux";
import * as D from "../../data";
import * as C from "../../store/cards";
import { Appstate } from "../../store";
import { useCallback, useEffect, useMemo } from "react";
import Card from "./Card";
import Icon from "../../theme/daisyui/Icon";

const makeCard = () => D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 100), "", "", "", "");

export default function CardsTest() {
    const dispatch = useDispatch();
    const cards = useSelector<Appstate, C.State>(({ cards }) => cards);
    const addCard = useCallback(() => {
        dispatch(C.addCard(makeCard()));
    }, [dispatch]);

    const removeCard = useCallback((id: string) => () => dispatch(C.removeCard(id)), [dispatch]);

    const children = useMemo(() => cards.map((card) => <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />), [cards, removeCard]);

    useEffect(addCard, [addCard]);

    return (
        <section className="mt-4">
            <h2 className="font-bold text-5xl text-center">CardsTest</h2>
            <div className="mt-4">
                <Icon name="add" className="btn-primary" onClick={addCard} />
            </div>
            <div className="flex flex-wrap mt-4">{children}</div>
        </section>
    );
}
