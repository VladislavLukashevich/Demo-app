import React, {useState} from "react";
import {Button, List} from "antd";
import axios from "axios";

export const Quotes: React.FC = () => {
    const [quotes, setQuotes] = useState<string[]>([]);

    const handleGetQuote = (): void => {
        axios.get('https://api.kanye.rest/')
            .then(({data}) =>
                setQuotes(prev => [data.quote, ...prev]))
    }

    return (
        <List
            size="small"
            header={<Button onClick={handleGetQuote}>Get new quote</Button>}
            dataSource={quotes}
            renderItem={(item) => <List.Item>{item}</List.Item>}
        />
    )
}
