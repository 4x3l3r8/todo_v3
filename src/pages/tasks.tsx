import { Sidebar } from "@/components/sidebar"
import { Box, Button, Container, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { BsArrowLeft } from "react-icons/bs"
import { Outlet, useNavigate, useParams } from "react-router-dom"


export const Tasks: FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <Box h={"vh"} bg={"#E5E5E5"}>
            <Container as={Flex} bg={"white"} h={"vh"} px={0}>
                <Box display={{ base: id ? "none" : "block", md: "block" }} w={{ base: id ? "0%" : "100%", md: "40%" }} h={"vh"} shadow={"lg"} shadowColor={"red.800"}>
                    <Sidebar />
                </Box>
                <Box w={{ base: id ? "100%" : "0%", md: "60%" }} pos={"relative"}>
                    <Outlet />
                    <Button size="xs" variant="ghost" pos="absolute" top="4" left="4" onClick={() => navigate("/tasks")} display={{ base: "block", md: "none" }} >
                        <BsArrowLeft />
                    </Button>
                </Box>
            </Container>
        </Box >
    )
}