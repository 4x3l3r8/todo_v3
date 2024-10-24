import { Stack } from "@chakra-ui/react"
import { TaskCard } from "./TaskCard"

export const TaskList = () => {
    return (
        <Stack p={4} gap={6} overflowY={"scroll"} maxH={"79%"}>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
        </Stack>
    )
}
