import { useState } from "react";
import { Task } from "./Task";
import { useLocalStorageTask, useQuery } from "../web-backend/TaskPageHooks";
import { Navigate } from "react-router-dom";
import { useLocalStorageTodoList } from "../web-backend/StorageHook";

const TaskPage = () => {
  const query = useQuery();
  const id = query.get("id");
  const { todoList } = useLocalStorageTodoList();
  if (!id || !todoList.find((task) => task.id === id))
    return <Navigate to={"/"} />;

  const [editing, setEditing] = useState(false);
  const { title, setTitle, description, setDescription, checked, setChecked } =
    useLocalStorageTask(id);

  const getSize = () =>
    title.length <= 1 ? 1 : title.length > 25 ? 25 : title.length - 1;

  return (
    <Task.Root>
      <Task.Head>
        <Task.Checkbox {...{ checked, setChecked }} />
        <Task.Title {...{ checked, editing, getSize, setTitle, title }} />
        <Task.ButtonEdit {...{ setEditing, title }} />
      </Task.Head>
      <Task.Body>
        <Task.Description {...{ description, editing, setDescription }} />
        <Task.ButtonsContainer>
          <Task.ButtonSave />
          <Task.ButtonDelete {...{ id }} />
        </Task.ButtonsContainer>
      </Task.Body>
    </Task.Root>
  );
};

export default TaskPage;
