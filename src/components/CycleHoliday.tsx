import React, { useState } from "react";
import { Button } from "react-bootstrap";
/*
type Holiday =
    | "Tet"
    | "Christmas"
    | "DragonBoatFestival"
    | "VernalEquinoxDay"
    | "NewYear";

const HolidayAlpha: Record<Holiday, Holiday> = {
    Christmas: "DragonBoatFestival",
    DragonBoatFestival: "NewYear",
    NewYear: "Tet",
    Tet: "VernalEquinoxDay",
    VernalEquinoxDay: "Christmas"
};
const HolidayDates: Record<Holiday, Holiday> = {
    NewYear: "Tet",
    Tet: "VernalEquinoxDay",
    VernalEquinoxDay: "DragonBoatFestival",
    DragonBoatFestival: "Christmas",
    Christmas: "NewYear"
};
*/
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🀄");
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

    return (
        <div>
            <div>
                <Button onClick={() => setHoliday(HolidayAlpha[holiday])}>
                    <Button onClick={() => setHoliday(HolidayDates[holiday])}>
                        Advance by Date
                    </Button>
                    Advance by Alphabet
                </Button>
                <div>
                    <span>{holiday}</span>
                </div>
            </div>
        </div>
    );
}
