import { Task } from "./Task";
import { useQuery } from "./actions/HookQuery";
import { verifyTask } from "./actions/actionsTask";
import { useEffect, useState } from "react";
import axios from "axios";
import { Task as TaskType } from "../types/Task";

const TaskPage = () => {
  const query = useQuery();
  const id = query.get("id");

  // Verifying if has an id
  if (!id) return (window.location.href = "http://localhost:5173/");

  // Verifying if task exists
  const taskExists = verifyTask(id);
  if (!taskExists) return (window.location.href = "http://localhost:5173/");

  // Setup
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [changed, setChanged] = useState(false);

  // Fetch task and update states
  const fetchTask = async (id: string) => {
    const response = await axios.get(`http://127.0.0.1:8000/task/${id}/`);
    if (response.status !== 200) return;
    const data: TaskType = response.data;

    setTitle(data.title);
    setChecked(data.checked);
    setDescription(data.description);
  };

  // Update task on backend
  const updateTask = (id: string) => {
    return axios.put(`http://127.0.0.1:8000/task/${id}/update/`, {
      title,
      description,
    });
  };

  // On initialize
  useEffect(() => {
    fetchTask(id);
  }, []);

  // On save
  useEffect(() => {
    if (editing === true) {
      if (changed !== false) return;
      setChanged(true);
      return;
    }
    if (changed === false) return;

    const main = async () => {
      await updateTask(id);
      fetchTask(id);
    };
    main();
  }, [editing]);

  const getSize = () =>
    title.length <= 1 ? 1 : title.length > 25 ? 25 : title.length - 1;

  return (
    <Task.Root>
      <Task.Head>
        <Task.Checkbox {...{ id, checked, fetchTask }} />
        <Task.Title {...{ checked, editing, getSize, setTitle, title }} />
        <Task.ButtonEdit {...{ setEditing, title }} />
      </Task.Head>
      <Task.Body>
        <Task.Description {...{ description, setDescription, editing }} />
        <Task.ButtonsContainer>
          <Task.ButtonSave {...{ id, updateTask, fetchTask }} />
          <Task.ButtonDelete {...{ id, fetchTask }} />
        </Task.ButtonsContainer>
      </Task.Body>
    </Task.Root>
  );
};

export default TaskPage;
