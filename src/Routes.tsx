import { createBrowserRouter, Navigate } from "react-router-dom";
import { Tasks } from "./pages/tasks";
import { TaskSingle } from "./pages/taskSingle";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to={"/tasks"} />
    },
    {
        path: "/tasks",
        element: <Tasks />,
        children: [
            {
                path: "/tasks/:id",
                element: <TaskSingle />
            }
        ]
    },
    {
        path: "*",
        element: <>Not found</>
    }
])