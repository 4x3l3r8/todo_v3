import { Box, Flex, Icon, Text, useCheckbox } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IoCheckmark } from "react-icons/io5";
import { CheckboxProps } from "../ui/checkbox";

type CustomCheckboxProps = {
    label?: string;
    children: ReactNode
} & CheckboxProps

export const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
    const { checked, getLabelProps, getHiddenInputProps, getRootProps, getControlProps } =
        useCheckbox(props);

    return (
        <Box
            as={"label"}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gridColumnGap={2}
            maxW="full"
            flex={1}
            cursor="pointer"
            {...getRootProps}
        >
            <input {...getHiddenInputProps()} hidden />
            <Flex
                alignItems="center"
                justifyContent="center"
                border="1.5px solid"
                bg={checked ? "#53DA69" : "transparent"}
                rounded={"full"}
                borderColor={checked ? "#49C25D" : "#071D55"}
                w={8}
                h={8}
                {...getControlProps()}
            >
                {checked && <Icon fontSize="40px" p={2} color={"#399649"}>
                    <IoCheckmark /></Icon>}
            </Flex>
            <Text textDecor={checked ? "line-through" : ""} color={checked ? "#8D8D8D" : "#071D55"} {...getLabelProps()}>
                {props.children}
            </Text>
        </Box>
    );
};