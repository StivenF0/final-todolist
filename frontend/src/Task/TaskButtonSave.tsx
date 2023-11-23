import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface TaskButtonSaveProps {
  id: string;
  fetchTask: (id: string) => void;
  updateTask: (id: string) => Promise<AxiosResponse<any, any>>;
}

const TaskButtonSave = ({ id, fetchTask, updateTask }: TaskButtonSaveProps) => {
  const handleClick = async () => {
    await updateTask(id);
    fetchTask(id);
  };

  return (
    <Link
      to="/"
      className="border-2 border-neutral-600 text-neutral-800 rounded-l-full border-r h-10 text-xl font-semibold"
      onClick={handleClick}
    >
      <button className="h-full w-full">Save</button>
    </Link>
  );
};

export default TaskButtonSave;
