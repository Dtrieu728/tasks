/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const clonedNums: number[] = [];
    if (numbers.length === 0) {
        return clonedNums;
    } else if (numbers.length < 2) {
        clonedNums.push(numbers[0]);
        clonedNums.push(numbers[0]);
    } else {
        clonedNums.push(numbers[0]);
        clonedNums.push(numbers[numbers.length - 1]);
    }
    return clonedNums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const num = numbers.map((int: string): number =>
        isNaN(Number(int)) ? 0 : Number(int)
    );
    return num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const NoDollas = amounts.map((int: string): number =>
        int.includes("$")
            ? ((int = int.slice(1)), isNaN(Number(int)) ? 0 : Number(int))
            : isNaN(Number(int))
            ? 0
            : Number(int)
    );
    return NoDollas;
};
/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const processedMessages: string[] = messages
        .map((message: string): string =>
            message.endsWith("!")
                ? message.toUpperCase()
                : !message.endsWith("?")
                ? message
                : ""
        )
        .filter(Boolean);
    return processedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const RGB = (color: string): boolean =>
        color === "red" || color === "blue" || color === "green";
    return colors.every(RGB);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }

    const sum = addends.reduce((acc, curr) => acc + curr, 0);
    const equation = addends.join("+");

    return `${sum}=${equation}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const sum = 0;
    const clone = [];
    if (values.every((val: number): boolean => val > 0)) {
        const sum = values.reduce(
            (total: number, val: number) => total + val,
            0
        );
        const clone = [...values, sum];
    }
    return [];
}
