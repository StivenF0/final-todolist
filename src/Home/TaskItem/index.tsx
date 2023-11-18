import { TaskItem } from "./TaskItem";
import { Task } from "../../types/task";

interface TaskItemElementProps extends Task {
  checkTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItemElement = ({
  id,
  title,
  checked,
  checkTask,
  deleteTask,
}: TaskItemElementProps) => {
  return (
    <TaskItem.Root>
      <TaskItem.ButtonCheck checked={checked} checkTask={checkTask} id={id} />
      <TaskItem.Title checked={checked}>{title}</TaskItem.Title>
      <TaskItem.ButtonInfo id={id} />
      <TaskItem.ButtonDelete id={id} deleteTask={deleteTask} />
    </TaskItem.Root>
  );
};

export default TaskItemElement;
