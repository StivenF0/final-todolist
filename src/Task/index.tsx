import { useState } from "react";
import { Task } from "./Task";

const TaskPage = () => {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("Task 1");

  const getSize = () =>
    title.length <= 1 ? 1 : title.length > 25 ? 25 : title.length - 1;

  return (
    <Task.Root>
      <Task.Head>
        <Task.Checkbox checked={checked} setChecked={setChecked} />
        <Task.Title
          checked={checked}
          editing={editing}
          getSize={getSize}
          setTitle={setTitle}
          title={title}
        />
        <Task.ButtonEdit setEditing={setEditing} title={title} />
      </Task.Head>
      <Task.Body>
        <Task.Description
          description={description}
          editing={editing}
          setDescription={setDescription}
        />
        <Task.ButtonsContainer>
          <Task.ButtonSave />
          <Task.ButtonDelete />
        </Task.ButtonsContainer>
      </Task.Body>
    </Task.Root>
  );
};

export default TaskPage;
