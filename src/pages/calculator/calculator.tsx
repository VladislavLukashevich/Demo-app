import {Button, Input} from "antd";
import "./calculator.scss";
import React from "react";
import {
    $leftOperandStore,
    $rightOperandStore,
    $resultStore,
    handleAdd,
    handleLeftOperandChange,
    handleRightOperandChange,
    handleMultiply, handleDivide, handleSubtract
} from "../../models/calculator/init"
import {useStore} from "effector-react";

export const Calculator: React.FC = () => {
    const leftOperandStore = useStore($leftOperandStore);
    const rightOperandStore = useStore($rightOperandStore);
    const resultStore = useStore($resultStore);

    return (
        <div className="calculator-wrapper">
            <div className="operands">
                <Input type="number"
                       placeholder="Left operand"
                       value={leftOperandStore}
                       onChange={(e) => handleLeftOperandChange(Number(e.target.value))}
                ></Input>
                <Input type="number"
                       placeholder="Right operand"
                       value={rightOperandStore}
                       onChange={(e) => handleRightOperandChange(Number(e.target.value))}
                ></Input>
            </div>
            <div className="actions">
                <Button type="primary" onClick={() => handleAdd()}>+</Button>
                <Button type="primary" onClick={() => handleSubtract()}>-</Button>
                <Button type="primary" onClick={() => handleMultiply()}>*</Button>
                <Button type="primary" onClick={() => handleDivide()}>/</Button>
            </div>
            <div className="result">
                <span>Result: {resultStore}</span>
            </div>
        </div>
    )
}
