import { Form } from "@/components/Form"
import { Box, Center, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export const TaskSingle = () => {
    const { id } = useParams()
    return (
        <Box w={"full"} h={"full"}>
            <Box p={4} bg={"#3556AB"} h={"10%"} color={"white"}>
                <Center p={2} gap={4} >
                    <Heading textShadow={"2px 2px 1px #000"} fontSize={"25px"} fontWeight={"medium"}>{id === "add" ? "Add" : "Edit"} Task</Heading>
                </Center>
            </Box>
            {id === "add" ? <Form /> : <Form id={id} />}
        </Box>
    )
}
