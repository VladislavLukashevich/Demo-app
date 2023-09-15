import {createEffect, createStore} from "effector";
import axios from "axios";

export const handleGetQuote = createEffect(async (url: string): Promise<string> => {
    const res =  await axios.get(url);

    return res.data.quote;
})

export const $quotesStore = createStore<string[]>([])
    .on(handleGetQuote.doneData, (state, newQuote) => [newQuote, ...state]);

