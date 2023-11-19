import { Link } from "react-router-dom";

const TaskButtonSave = () => {
  return (
    <button className="border-2 border-neutral-600 text-neutral-800 rounded-l-full border-r h-10 text-xl font-semibold overflow-hidden">
      <Link to="/" className="flex items-center justify-center h-full w-full">
        Save
      </Link>
    </button>
  );
};

export default TaskButtonSave;
