import React from "react";
import {Button, List} from "antd";
import {fetchQuote, $quotesStore} from "../../models/quotes/init";
import {useStore} from "effector-react";

const quotesUrl: string = "https://api.kanye.rest";

export const Quotes: React.FC = () => {
    const quotesStore = useStore($quotesStore)

    return (
        <List
            size="small"
            header={<Button onClick={() => fetchQuote(quotesUrl)}>Get new quote</Button>}
            dataSource={quotesStore}
            renderItem={(item) => <List.Item>{item}</List.Item>}
        />
    )
}
