import { Link } from "react-router-dom";
import { deleteTask } from "./actions/actionsTask";

interface TaskButtonDeleteProps {
  id: string;
  fetchTask: (id: string) => void;
}

const TaskButtonDelete = ({ id, fetchTask }: TaskButtonDeleteProps) => {
  const handleClick = async () => {
    await deleteTask(id);
    fetchTask(id);
  };

  return (
    <Link
      to="/"
      className="border-2 border-neutral-600 text-neutral-800 rounded-r-full border-l h-10 text-xl font-semibold"
      onClick={handleClick}
    >
      <button className="h-full w-full">Delete</button>
    </Link>
  );
};

export default TaskButtonDelete;
