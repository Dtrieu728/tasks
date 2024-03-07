import React, { useState } from "react";

export function MultipleChoiceQuestion({
    expectedAnswer,
    options
}: {
    expectedAnswer: string;
    options: string[];
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedChoice(event.target.value);
    };

    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <select value={selectedChoice} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
