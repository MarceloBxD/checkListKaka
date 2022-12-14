import React, { useEffect } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import avatarImg from "../../assets/images/avatar.jpeg";

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
      <Flex>
        <Avatar src={avatarImg} size="md" />
      </Flex>
    </Flex>
  );
};
