import React, { useState } from "react";
import {
  Flex,
  Input,
  Progress,
  Text,
  Button,
  Checkbox,
  Toast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useApp } from "../../contexts/ContextApi";

export const ContainerTable = () => {
  const {
    tasks,
    inputValue,
    handleCheck,
    onchange,
    handleAddTask,
    tasksCompleted,
  } = useApp();

  return (
    <Flex flexDir="column" m="0 auto">
      <Flex>
        <Input
          color="#FFF"
          variant="flushed"
          w="400px"
          value={inputValue}
          onChange={onchange}
          placeholder="Adicionar item"
          _placeholder={{ color: "#FFF" }}
        />
        <Button variant="ghost" onClick={() => handleAddTask()}>
          <AddIcon w="20px" h="20px" />
        </Button>
      </Flex>
      <Flex mt="20px" flexDir="column">
        {tasks.map((item, index) => (
          <Flex
            w="100%"
            bgColor="#222"
            color="#fff"
            m="5px"
            p="8px"
            gap="10px"
            borderRadius="10px"
            key={index}
          >
            <Checkbox
              name={item.title}
              checked={item.checked}
              id={item.id}
              type="checkbox"
              size="md"
              onChange={handleCheck}
            />
            <Text
              textDecor={item.checked ? "line-through" : "none"}
              fontWeight="700"
            >
              {item.title}
            </Text>
          </Flex>
        ))}
        <Flex position="fixed" w="30%" flexDir="column" bottom="20px">
          <Progress
            w="100%"
            align="center"
            colorScheme={tasksCompleted === tasks.length ? "green" : "red"}
            size="md"
            max={tasks.length}
            value={tasksCompleted}
            visibility={tasksCompleted === tasks.length ? "hidden" : "visible"}
          />
          {tasksCompleted === tasks.length && (
            <Alert status="success">
              <AlertIcon />
              Tarefas concluídas com sucesso! Parabéns!
            </Alert>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
