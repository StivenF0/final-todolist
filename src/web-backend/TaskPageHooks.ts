import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Task } from "../types/task";

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const KEY = "todolist";
const getStoredTask = (id: string) => {
  const fetchedTodoListString = localStorage.getItem(KEY);
  if (!fetchedTodoListString) return;
  const fetchedTodoList = JSON.parse(fetchedTodoListString) as Task[];
  return fetchedTodoList.find((task) => task.id === id) as Task;
};

const setStoredTask = (
  id: string,
  title: string,
  description: string,
  checked: boolean
) => {
  const fetchedTodoListString = localStorage.getItem(KEY);
  if (!fetchedTodoListString) return;
  const fetchedTodoList = JSON.parse(fetchedTodoListString) as Task[];
  const index = fetchedTodoList.findIndex((task) => task.id === id);
  fetchedTodoList[index] = {
    id,
    title,
    description,
    checked,
  };
  localStorage.setItem(KEY, JSON.stringify(fetchedTodoList));
};

export const removeStoredTask = (id: string) => {
  const fetchedTodoListString = localStorage.getItem(KEY);
  if (!fetchedTodoListString) return;
  const fetchedTodoList = JSON.parse(fetchedTodoListString) as Task[];
  const index = fetchedTodoList.findIndex((task) => task.id === id);
  fetchedTodoList.splice(index);
  localStorage.setItem(KEY, JSON.stringify(fetchedTodoList));
};

export const useLocalStorageTask = (id: string) => {
  const currentTask = getStoredTask(id) as Task;
  const [title, setTitle] = useState(currentTask.title);
  const [description, setDescription] = useState(currentTask.description);
  const [checked, setChecked] = useState(currentTask.checked);

  useEffect(() => {
    setStoredTask(id, title, description, checked);
  }, [title, description, checked]);

  return { title, setTitle, description, setDescription, checked, setChecked };
};
