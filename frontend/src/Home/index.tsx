import { createContext, useEffect, useState } from "react";
import { Home } from "./Home";
import TaskItemElement from "./TaskItem";
import axios from "axios";
import { Task } from "../types/Task";

export const Context = createContext<() => Promise<void>>(() =>
  Promise.resolve()
);

const HomePage = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);

  const fetchTodoList = async () => {
    const response = await axios.get("http://localhost:8000/");
    if (response.status !== 200) {
      throw new Error("Could not fetch data!");
    }
    const data: Task[] = response.data;
    console.log(data);
    setTodoList(data);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <Home.Root>
      <Context.Provider value={fetchTodoList}>
        <Home.Head>
          <Home.Form />
        </Home.Head>
        <Home.Body>
          {todoList.map((task) => (
            <TaskItemElement key={task.id} {...task} />
          ))}
        </Home.Body>
      </Context.Provider>
    </Home.Root>
  );
};

export default HomePage;
