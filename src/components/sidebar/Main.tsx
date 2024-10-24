import trophy from "@/assets/group_27.svg"
import { Box, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { PiPlus } from 'react-icons/pi'
import { useNavigate } from "react-router-dom"
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { TaskList } from "./TaskList"

type Props = {}

export const Sidebar = (props: Props) => {
    const navigate = useNavigate()
    return (
        <Box h={"full"} w={"full"} pos={"relative"} boxShadow={"0px 0px 7px 2px #00000040"}>
            <Box p={4} bg={"#3556AB"} h={"10%"}>
                <Flex p={2} gap={4} >
                    <Avatar size={"lg"}></Avatar>
                    <Stack gap={0} color={"white"}>
                        <Heading textShadow={"2px 2px 1px #000"} size={"md"}>Hello, Jhon</Heading>
                        <Text textShadow={"2px 2px 1px #000"} fontSize={"25px"} fontStyle={"italic"} fontWeight={"thin"}>What are your plans for today?</Text>
                    </Stack>
                </Flex>
            </Box>
            <Box p={4} h={"11%"} bg={"#CDE53D"} border={"2px solid #9EB031"} py={6} boxShadow={"0px 4px 4px 0px #0000001A"} pos={"relative"}>
                <Flex p={2} gap={4} alignItems={"center"}>
                    <Image src={trophy} />
                    <Heading color={"#071D55"} textShadow={"1px 1px 2px #FFFFFF"} fontWeight={"700"} fontSize={"18px"}>Go Pro Upgrade Now</Heading>
                </Flex>
                <Center pos={"absolute"} top={"-0.5"} right={"10%"} bg={"#071D55"} p={5}>
                    <Text color={"#F2C94C"} fontWeight={"bold"}>$1</Text>
                </Center>
            </Box>
            <TaskList />
            <Button onClick={() => navigate("add")} filter={"drop-shadow(0px 4px 4px 0px #00000040)"} boxShadow={"0px 2px 1px 0px #A8B5DE80 inset"} size={"lg"} pos={"absolute"} bg={"#3556AB"} bottom={4} right={4} colorPalette={"blue"} rounded={"full"}>
                <PiPlus />
            </Button>
        </Box >
    )
}