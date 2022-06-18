import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

import CalendarPage from "../CalendarPage/CalendarPage.js";
import TasksPage from "../TasksPage/TasksPage.js";
import TabNav from "../../components/TabNav/TabNav.js";

const Main = () => {
    const [activeTab, setActiveTab] = useState("calendar");

    return (
        <div>
            <Tabs
                value={activeTab}
                onChange={(event, value) => setActiveTab(value)}
            >
                <Tab label="Calendar" value="calendar" />
                <Tab label="Tasks" value="tasks" />
            </Tabs>
            {
                activeTab === "calendar" ? <CalendarPage /> : <TasksPage />
            }
        </div>
    )
}

export default Main;