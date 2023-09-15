import {createEvent, createStore} from "effector";

export const handleAdd = createEvent<void>();
export const handleSubtract = createEvent<void>();
export const handleMultiply = createEvent<void>();
export const handleDivide = createEvent<void>();
export const handleLeftOperandChange = createEvent<number>();
export const handleRightOperandChange = createEvent<number>();

export const $leftOperandStore = createStore<number>(0)
    .on(handleLeftOperandChange, (state, value) => value);

export const $rightOperandStore = createStore<number>(0)
    .on(handleRightOperandChange, (state, value) => value);

export const $resultStore = createStore<number>(0)
    .on(handleAdd, () => $leftOperandStore.getState() + $rightOperandStore.getState())
    .on(handleSubtract, () => $leftOperandStore.getState() - $rightOperandStore.getState())
    .on(handleMultiply, () => $leftOperandStore.getState() * $rightOperandStore.getState())
    .on(handleDivide, () => $leftOperandStore.getState() / $rightOperandStore.getState());
