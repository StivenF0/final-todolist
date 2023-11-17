import { Link } from "react-router-dom";

const TaskButtonDelete = () => {
  const handleDelete = () => {
    console.log("delete");
    return;
  };

  return (
    <button
      className="border-2 border-neutral-600 text-neutral-800 rounded-r-full border-l h-10 text-xl font-semibold"
      onClick={handleDelete}
    >
      <Link to="/" className="h-full w-full">
        Delete
      </Link>
    </button>
  );
};

export default TaskButtonDelete;
