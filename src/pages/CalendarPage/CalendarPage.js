import { useState } from "react";
import { Select, MenuItem } from "@mui/material";

import Tasks from "../../components/Tasks/Tasks";
import MonthCalendar from "../../components/MonthCalendar/MonthCalendar";
import WeekCalendar from "../../components/WeekCalendar/WeekCalendar";

const CalendarPage = () => {
    const [activeCalView, setActiveCalView] = useState("month");
    
    return (
        <div>
            <Select
                label="Calendar View"
                value={activeCalView}
                onChange={(event, value) => setActiveCalView(event.target.value)}
            >
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="week">Week</MenuItem>
            </Select>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Tasks />
                {
                    activeCalView === "month" ? <MonthCalendar /> : <WeekCalendar />
                }
            </div>
        </div>
    );
}

export default CalendarPage;