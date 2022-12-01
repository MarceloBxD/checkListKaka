import React, { useState } from "react";
import {
  Checkbox,
  Flex,
  Input,
  Text,
  Button,
  CheckboxGroup,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Buttons } from "../Buttons/Buttons";
import { useToast } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

export const ContainerTable = () => {
  const toast = useToast();
  const dateOfItemAdded = new Date();
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const idRandom = (num) => {
    return Math.floor(Math.random() * num);
  };

  const newTask = {
    id: idRandom(1000000),
    title: inputValue,
    checked: isComplete,
    date: new Date(),
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
    if (tasks) {
      console.log(tasks[0]);
    }
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
        <Button
          variant="ghost"
          onClick={() => handleAddTask()}
          // {
          //   inputValue
          //     ? setTasks([...tasks, newTask])
          //     : toast({
          //         title: "No tasks to add.",
          //         description: "Try to add a task inside the list.",
          //         status: "error",
          //         duration: 9000,
          //         isClosable: true,
          //       });
          // }
          // }}
        >
          <AddIcon w="20px" h="20px" />
        </Button>
      </Flex>
      <Flex mt="20px" flexDir="column">
        {tasks.map((item, index) => (
          <Flex
            w="100%"
            bgColor="transparent"
            color="#fff"
            m="5px"
            p="8px"
            gap="10px"
            borderRadius="10px"
            key={index}
          >
            {/* <Checkbox onChange={() => setIsComplete(!isComplete)} size="md" /> */}
            <Checkbox onChange={() => setIsComplete(!isComplete)} />
            <Text
              textDecor={isComplete ? "line-through" : "none"}
              fontWeight="400"
            >
              {item.title}
            </Text>
          </Flex>
        ))}
        <Progress
          mt="10px"
          colorScheme="blackAlpha"
          size="xs"
          max={tasks.length}
          value={0}
        />
      </Flex>
    </Flex>
  );
};
