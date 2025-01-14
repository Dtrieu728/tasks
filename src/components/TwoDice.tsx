import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(2);

    const rollDie1 = () => {
        //const d1 = d6();
        setDie1(d6());
    };
    const rollDie2 = () => {
        //const d2 = d6();
        setDie2(d6());
    };
    return (
        <div>
            <div>
                <span data-testid="left-die">{die1}</span>
                <Button onClick={rollDie1}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{die2}</span>
                <Button onClick={rollDie2}>Roll Right</Button>
            </div>
            {die1 === die2 && die1 === 1 && <p>You Lose!</p>}
            {die1 === die2 && die1 !== 1 && <p>You Win!</p>}
        </div>
    );
    return <div>Two Dice</div>;
}
