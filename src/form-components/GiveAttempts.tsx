import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptRequest, setAttemptRequest] = useState<string>("");

    function decreaseAttempt() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function increaseAttempt() {
        const parsedRequest = parseInt(attemptRequest);
        if (!isNaN(parsedRequest) && parsedRequest > 0) {
            setAttemptsLeft(attemptsLeft + parsedRequest);
            setAttemptRequest("");
        }
    }

    return (
        <div>
            <Form.Group controlId="Attempts Left">
                <Form.Label>Give Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptRequest}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptRequest(event.target.value)
                    }
                />
            </Form.Group>
            <h3>Attempts Left: {attemptsLeft}</h3>
            <Button onClick={decreaseAttempt} disabled={attemptsLeft === 0}>
                Use
            </Button>
            <Button onClick={increaseAttempt}>Gain</Button>
        </div>
    );
}
