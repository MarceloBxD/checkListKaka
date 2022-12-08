import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { useToast } from "@chakra-ui/react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const task = [];

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(task);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const toast = useToast();

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

  const newTask = {
    id: Math.floor(1 + Math.random() * 100000),
    title: inputValue,
    checked: false,
    date: new Date(),
  };

  const onchange = (e) => {
    localStorage.setItem("inputValue", e.target.value);
    setInputValue(e.target.value);
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
    console.log(newTask.date);
  };

  const value = {
    inputValue,
    setInputValue,
    task,
    tasks,
    setTasks,
    tasksCompleted,
    setTasksCompleted,
    handleAddTask,
    newTask,
    onchange,
    handleCheck,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
