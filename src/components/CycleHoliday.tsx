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
    type Holiday = "🀄" | "🎄" | "🐉" | "☀️" | "🥂";

    const [holiday, setHoliday] = useState<Holiday>("🀄");

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
                    Advance by Alphabet
                </Button>
                <div>
                    <Button onClick={() => setHoliday(HolidayDates[holiday])}>
                        Advance by Year
                    </Button>
                </div>
                <div>{holiday}</div>
            </div>
        </div>
    );
}
