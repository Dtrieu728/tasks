import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [Attempts, numAttempt] = useState<number>(4);
    const [quizProg, setProg] = useState<boolean>(false);
    const startQuiz = () => {
        if (Attempts > 0) {
            setProg(true);
            numAttempt((Attempts) => Attempts - 1);
        }
    };

    const stopQuiz = () => {
        setProg(false);
    };

    const mulligan = () => {
        numAttempt((Attempts) => Attempts + 1);
    };

    return (
        <>
            <p>Attempts left: {Attempts}</p>
            <Button onClick={startQuiz} disabled={quizProg || Attempts === 0}>
                Start Quiz
            </Button>
            <div>
                <Button onClick={stopQuiz} disabled={!quizProg}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={quizProg}>
                    Mulligan
                </Button>
            </div>
        </>
    );
}
