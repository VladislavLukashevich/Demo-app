import {Button, Input} from "antd";
import "./calculator.scss";
import React, {useState} from "react";

export const Calculator: React.FC = () => {
    const [leftOperand, setLeftOperand] = useState<number>(0);
    const [rightOperand, setRightOperand] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handleAdd = (): void => {
        setResult(() => leftOperand + rightOperand);
    };

    const handleSubtract = (): void => {
        setResult(() => leftOperand - rightOperand);
    };

    const handleMultiply = (): void => {
        setResult(() => leftOperand * rightOperand);
    };

    const handleDivide = (): void => {
        setResult(() => leftOperand / rightOperand);
    };

    return (
        <div className="calculator-wrapper">
            <div className="operands">
                <Input type="number"
                       placeholder="Left operand"
                       value={leftOperand}
                       onChange={(e) => setLeftOperand(Number(e.target.value))}></Input>
                <Input type="number"
                       placeholder="Right operand"
                       value={rightOperand}
                       onChange={(e) => setRightOperand(Number(e.target.value))}></Input>
            </div>
            <div className="actions">
                <Button type="primary" onClick={handleAdd}>+</Button>
                <Button type="primary" onClick={handleSubtract}>-</Button>
                <Button type="primary" onClick={handleMultiply}>*</Button>
                <Button type="primary" onClick={handleDivide}>/</Button>
            </div>
            <div className="result">
                <span>Result: {result}</span>
            </div>
        </div>
    )
}
