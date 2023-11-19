import { useState } from "react";
import { TaskItem } from "./TaskItem";

const TaskItemElement = () => {
  const [checked, setChecked] = useState(false);

  return (
    <TaskItem.Root>
      <TaskItem.ButtonCheck checked={checked} setChecked={setChecked} />
      <TaskItem.Title checked={checked}>Task 1</TaskItem.Title>
      <TaskItem.ButtonInfo />
      <TaskItem.ButtonDelete />
    </TaskItem.Root>
  );
};

export default TaskItemElement;
