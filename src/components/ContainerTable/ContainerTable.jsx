import React, { useEffect, useState } from "react";
import {
  Flex,
  Input,
  Progress,
  Text,
  Button,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tooltip,
} from "@chakra-ui/react";
import { useApp } from "../../contexts/ContextApi";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";

export const ContainerTable = () => {
  const {
    tasks,
    inputValue,
    handleCheck,
    onchange,
    handleAddTask,
    tasksCompleted,
    deleteTask,
    deleteAll,
  } = useApp();

  return (
    <Flex flexDir="column" m="0 auto">
      <Flex>
        <Input
          color="#FFF"
          variant="flushed"
          w="400px"
          onKeyDown={(e) => (e.KeyCode == "13" ? handleAddTask() : null)}
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
            justify="space-between"
            key={index}
          >
            <Flex align="center" justify="space-between" w="100%" gap="10px">
              <Flex gap="10px">
                <Checkbox
                  name={item.label}
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
                  {item.label}
                </Text>
              </Flex>
              <Flex>
                <Button onClick={() => deleteTask(item.id)} variant="ghost">
                  <DeleteIcon w="20px" h="20px" />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
        <Flex w="35%" position="fixed" flexDir="column" bottom="20px">
          <Progress
            w="100%"
            align="center"
            colorScheme={tasksCompleted === tasks.length ? "green" : "red"}
            size="md"
            max={tasks.length}
            value={tasksCompleted}
            visibility={tasks.length === 0 ? "hidden" : "visible"}
          />
          {tasksCompleted === tasks.length && tasks.length != 0 && (
            <Alert status="success" mt="10px">
              <AlertIcon />
              <AlertTitle mr={2}>Parabéns!</AlertTitle>
              <AlertDescription>
                Você concluiu todas as tarefas!
              </AlertDescription>
            </Alert>
          )}
        </Flex>
        <Button
          onClick={() => deleteAll()}
          isDisabled={tasks.length != 0 ? false : true}
          position="fixed"
          right="20px"
          bottom="20px"
        >
          <Tooltip label="Delete All" mb="10px" size="sm">
            <DeleteIcon variant="unstyled" w="20px" h="20px" />
          </Tooltip>
        </Button>
      </Flex>
    </Flex>
  );
};
