import { useLocalStorageTodoList } from "../web-backend/StorageHook";
import { Home } from "./Home";
import TaskItemElement from "./TaskItem";

const HomePage = () => {
  const { todoList, checkTask, deleteTask, addTask } =
    useLocalStorageTodoList();

  return (
    <Home.Root>
      <Home.Head>
        <Home.Form addTask={addTask} />
      </Home.Head>
      <Home.Body>
        {todoList.map((task) => (
          <TaskItemElement
            key={task.id}
            {...task}
            {...{ checkTask, deleteTask }}
          />
        ))}
      </Home.Body>
    </Home.Root>
  );
};

export default HomePage;
