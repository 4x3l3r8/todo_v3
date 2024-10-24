import { Card, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { CustomCheckbox } from "./CustomCheckbox"

export const TaskCard = () => {
    const navigate = useNavigate()
    return (
        <Card.Root bg={"white"} border={"1px solid #E7E7E7"} boxShadow={"0px 4px 4px 0px #0000001A"}>
            <Card.Body>
                <HStack>
                    <CustomCheckbox flex={1}>
                        Something
                    </CustomCheckbox>
                    <Button bg={"transparent"} color={"#071D55"} onClick={() => navigate("asdd")} border={"1px solid #071D55"}>Edit</Button>
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}
