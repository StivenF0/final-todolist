import { checkTask } from "./actions/actionsTask";

interface TaskCheckboxProps {
  checked: boolean;
  fetchTask: (id: string) => void;
  id: string;
}

const TaskCheckbox = ({ id, checked, fetchTask }: TaskCheckboxProps) => {
  const handleChange = async () => {
    await checkTask(id);
    fetchTask(id);
  };

  return (
    <>
      <input
        className="w-5 h-5"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <div className="p-2" />
    </>
  );
};

export default TaskCheckbox;
