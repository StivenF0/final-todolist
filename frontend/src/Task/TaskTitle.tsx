interface TaskTitleProps {
  checked: boolean;
  title: string;
  getSize: () => number;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  editing: boolean;
}

const TaskTitle = ({
  checked,
  title,
  getSize,
  setTitle,
  editing,
}: TaskTitleProps) => {
  const handleTitleEditing = (e: React.SyntheticEvent) => {
    const inputEl = e.target as HTMLInputElement;
    const size = getSize();

    inputEl.setAttribute("size", size.toString());
    setTitle(inputEl.value);
  };

  return (
    <>
      <input
        className={`focus:outline-none text-neutral-800 text-4xl font-extrabold tracking-wider disabled:bg-neutral-300 pl-2 monofont ${
          checked && "line-through"
        }`}
        type="text"
        value={title}
        onChange={handleTitleEditing}
        disabled={!editing}
        size={getSize()}
      />
      <div className="p-1" />
    </>
  );
};

export default TaskTitle;
