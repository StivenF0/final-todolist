interface TaskCheckboxProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskCheckbox = ({ checked, setChecked }: TaskCheckboxProps) => {
  const handleChecking = () => {
    return setChecked((currentCheck) => {
      return !currentCheck;
    });
  };

  return (
    <>
      <input
        className="w-5 h-5"
        type="checkbox"
        defaultChecked={checked}
        onClick={handleChecking}
      />
      <div className="p-2" />
    </>
  );
};

export default TaskCheckbox;
