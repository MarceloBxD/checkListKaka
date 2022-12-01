import React from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      p="15px"
      align="center"
      justifyContent="space-between"
    >
      <Text fontWeight="bold" color="#FFF" letterSpacing="5px" fontSize="20px">
        CheckList
      </Text>
      <Avatar size="md" src={""} />
    </Flex>
  );
};
