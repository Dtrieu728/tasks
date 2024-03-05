import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🀄" | "🎄" | "🐉" | "☀️" | "🥂";
    const HolidayAlpha: Record<Holiday, Holiday> = {
        "🎄": "🐉",
        "🐉": "🥂",
        "🥂": "🀄",
        "🀄": "☀️",
        "☀️": "🎄"
    };
    const HolidayDates: Record<Holiday, Holiday> = {
        "🥂": "🀄",
        "🀄": "☀️",
        "☀️": "🐉",
        "🐉": "🎄",
        "🎄": "🥂"
    };
    const [holiday, setHoliday] = useState<Holiday>("🀄");
    return (
        <div>
            <div>
                <Button onClick={() => setHoliday(HolidayAlpha[holiday])}>
                    Advance by Alphabet
                </Button>
                <div>
                    <Button onClick={() => setHoliday(HolidayDates[holiday])}>
                        Advance by Year
                    </Button>
                </div>
                <div>Holiday: {holiday}</div>
            </div>
        </div>
    );
}
export function CycleHoliday(): JSX.Element {
    return <div>Cycle Holiday</div>;
}
