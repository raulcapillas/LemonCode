import { isLowerThan, max } from "./business";

export const add = (a: number, b: number) => {
    const result = a + b;

    if (result < max) {
        isLowerThan(result, max);
    }

    return result;
};
