import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [quizType, setQuizType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeType = () => {
        setQuizType(
            quizType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };

    return (
        <>
            <div>
                <Button onClick={handleChangeType}>Change Type</Button>
            </div>
            <div>
                {quizType === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </>
    );
}
