import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "cyan",
        "magenta"
    ];

    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            {colors.map((color, index) => (
                <Form.Check
                    key={index}
                    inline
                    type="radio"
                    id={`color-${color}`}
                    label={color}
                    checked={selectedColor === color}
                    onChange={() => handleColorChange(color)}
                    style={{
                        backgroundColor: color,
                        color: "white",
                        marginRight: "10px"
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: selectedColor,
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {selectedColor ? "on" : "Select a color"}
                <div>
                    {selectedColor && (
                        <p>
                            You hvae chosen {""}
                            <span style={{ color: selectedColor }}>
                                {selectedColor}
                            </span>
                            .
                        </p>
                    )}
                </div>
                <span style={{ color: "white" }}>{selectedColor}</span>
            </div>
        </div>
    );
}
