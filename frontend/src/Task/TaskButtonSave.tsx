import { Link } from "react-router-dom";

const TaskButtonSave = () => {
  const handleSave = () => {
    console.log("save");
    return;
  };

  return (
    <button
      className="border-2 border-neutral-600 text-neutral-800 rounded-l-full border-r h-10 text-xl font-semibold"
      onClick={handleSave}
    >
      <Link to="/" className="h-full w-full">
        Save
      </Link>
    </button>
  );
};

export default TaskButtonSave;
