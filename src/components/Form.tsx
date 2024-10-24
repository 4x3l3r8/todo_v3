import { Box, Flex, HStack, Input } from "@chakra-ui/react"
import { FC } from "react"
import { Button } from "./ui/button"
import { Field } from "./ui/field"

export const Form: FC<{ id?: string | number }> = ({ id }) => {
    return (
        <Box as={Flex} flexDir={"column"} p={4} h={"90%"} w={"full"}>
            <Field label="Task Name">
                <Input size={"xl"} border={"2px solid #CBCBCB"} _focus={{ outline: "none" }} color={"#0D2972"} fontSize={"20px"} />
            </Field>


            {id ? <HStack mt={"auto"} w="full">
                <Button bg={"#AB3535"} borderColor={"#720D0D"} size={"lg"} rounded={"lg"} boxShadow={"0px 1px 1px 0px #A8B5DE80 inset"}>Delete</Button>
                <Button bg={"#3556AB"} size={"lg"} flex={1} rounded={"lg"} boxShadow={"0px 1px 1px 0px #A8B5DE80 inset"}>Save</Button>
            </HStack> : <HStack mt="auto"><Button bg={"#3556AB"} size={"lg"} flex={1} rounded={"lg"} boxShadow={"0px 1px 1px 0px #A8B5DE80 inset"}>Save</Button></HStack>}
        </Box>
    )
}
