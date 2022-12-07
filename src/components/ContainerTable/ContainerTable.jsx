import React, { useState } from "react";
import {
  Flex,
  Input,
  useToast,
  Progress,
  Text,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export const ContainerTable = () => {
  const task = [
    {
      id: Math.floor(1 + Math.random() * 100000),
      title: "Estudar",
      checked: false,
      date: new Date(),
    },
    {
      id: Math.floor(1 + Math.random() * 100000),
      title: "Jogar",
      checked: false,
      date: new Date(),
    },
    {
      id: Math.floor(1 + Math.random() * 100000),
      title: "Comprar",
      checked: false,
      date: new Date(),
    },
    {
      id: Math.floor(1 + Math.random() * 100000),
      title: "Amanhã",
      checked: false,
      date: new Date(),
    },
    {
      id: Math.floor(1 + Math.random() * 100000),
      title: "Pegar",
      checked: false,
      date: new Date(),
    },
  ];

  const toast = useToast();
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(task);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const newTask = {
    id: Math.floor(1 + Math.random() * 100000),
    title: inputValue,
    checked: false,
    date: new Date(),
  };

  const handleCheck = (e) => {
    const newTasks = tasks.map((item) => {
      if (item.id === Number(e.target.id)) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTasks(newTasks);
    setTasksCompleted(tasks.filter((item) => item.checked).length);
  };

  const handleAddTask = () => {
    {
      inputValue
        ? setTasks([...tasks, newTask])
        : toast({
            title: "No tasks to add.",
            description: "Try to add a task inside the list.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
    }
    setInputValue("");
  };

  return (
    <Flex flexDir="column" m="0 auto">
      <Flex>
        <Input
          color="#FFF"
          variant="flushed"
          w="400px"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Adicionar item"
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
        <Flex flexDir="column" textAlign="center" w="100%">
          <Text color="#333" fontWeight="bold" mt="10px">
            Progresso:{" "}
          </Text>
          <Progress
            mt="10px"
            colorScheme={tasksCompleted === tasks.length ? "green" : "red"}
            size="md"
            max={tasks.length}
            value={tasksCompleted}
          />
          {tasksCompleted === tasks.length && (
            <Text mt="10px" fontWeight="bold" color="#333">
              Parabéns, você concluiu todas as tarefas do dia!
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
