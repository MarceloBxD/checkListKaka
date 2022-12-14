import React, { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const task = [];

  const toast = useToast();
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(task);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [tasksChecked, setTasksChecked] = useState(
    // ao reiniciar a pagina, as tasks permanecem
    JSON.parse(localStorage.getItem("tasksChecked")) || []
  );
  const newTask = {
    id: Math.floor(Math.random() * 1000),
    label: inputValue,
    checked: false,
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
      console.log(tasks);
      setInputValue("");
    }
  };

  const deleteAll = () => {
    localStorage.clear();
    setTasks([]);
  };

  useEffect(() => {
    // ao reiniciar a pagina, as tasks permanecem
    const tasksInLocalStorage = localStorage.getItem("tasksInLocalStorage");
    if (tasksInLocalStorage) {
      setTasks(JSON.parse(tasksInLocalStorage));
    }
  }, []);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const onchange = (e) => {
    // salvar no local storage
    localStorage.setItem("inputValueInLocalStorage", e.target.value);
    setInputValue(e.target.value);

    localStorage.setItem("tasksInLocalStorage", JSON.stringify(tasks));
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
    deleteTask,
    deleteAll,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
