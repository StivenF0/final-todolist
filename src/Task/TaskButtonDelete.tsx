import { Link } from "react-router-dom";
import { removeStoredTask } from "../web-backend/TaskPageHooks";

interface TaskButtonDeleteProps {
  id: string;
}

const TaskButtonDelete = ({ id }: TaskButtonDeleteProps) => {
  const handleDelete = () => {
    removeStoredTask(id);
  };

  return (
    <button
      className="border-2 border-neutral-600 text-neutral-800 rounded-r-full border-l h-10 text-xl font-semibold"
      onClick={handleDelete}
    >
      <Link to="/" className="flex items-center justify-center h-full w-full">
        Delete
      </Link>
    </button>
  );
};

export default TaskButtonDelete;
