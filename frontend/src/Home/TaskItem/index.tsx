import { TaskItem } from "./TaskItem";
import { Task } from "../../types/Task";

interface TaskItemElementProps extends Task {}

const TaskItemElement = ({ id, title, checked }: TaskItemElementProps) => {
  return (
    <TaskItem.Root>
      <TaskItem.ButtonCheck {...{ checked, id }} />
      <TaskItem.Title {...{ checked }}>{title}</TaskItem.Title>
      <TaskItem.ButtonInfo />
      <TaskItem.ButtonDelete {...{ id }} />
    </TaskItem.Root>
  );
};

export default TaskItemElement;
