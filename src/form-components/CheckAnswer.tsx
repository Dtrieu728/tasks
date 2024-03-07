import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [UserAnswer, setUserAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    const isCorrect = UserAnswer === expectedAnswer;
    return (
        <div>
            <h3>
                <Form.Group controlId="formMovieName">
                    <Form.Label>Input Answer here:</Form.Label>
                    <Form.Control value={UserAnswer} onChange={updateAnswer} />
                </Form.Group>
            </h3>
            {isCorrect ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
