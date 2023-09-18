import {createEffect, createEvent, createStore, forward} from "effector";
import axios from "axios";

const handleGetQuote = createEffect(async (url: string): Promise<string> => {
    const res =  await axios.get(url);

    return res.data.quote;
})

export const fetchQuote = createEvent<string>();

forward({
    from: fetchQuote,
    to: handleGetQuote
})

export const $quotesStore = createStore<string[]>([])
    .on(handleGetQuote.doneData, (state, newQuote) => {
        console.log(newQuote)
        return [newQuote, ...state]
    });

