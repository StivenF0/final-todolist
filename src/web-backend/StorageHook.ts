import { useEffect, useState } from "react";
import { Task } from "../types/task";

const KEY = "todolist";

const getStoredTodoList: () => Task[] = () => {
  const fetchedTodoList = localStorage.getItem(KEY);
  if (!fetchedTodoList) {
    localStorage.setItem(KEY, "[]");
    return getStoredTodoList();
  }
  return JSON.parse(fetchedTodoList);
};

const setStoredTodoList = (todoList: Task[]) => {
  localStorage.setItem(KEY, JSON.stringify(todoList));
};

export const useLocalStorageTodoList = () => {
  const [todoList, setTodoList] = useState(getStoredTodoList());
  useEffect(() => {
    setStoredTodoList(todoList);
  }, [todoList]);

  const addTask = (title: string, description = "") => {
    setTodoList([
      ...todoList,
      { id: crypto.randomUUID(), title, description, checked: false },
    ]);
  };

  const deleteTask = (id: string) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const checkTask = (id: string) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return { todoList, addTask, deleteTask, checkTask };
};
