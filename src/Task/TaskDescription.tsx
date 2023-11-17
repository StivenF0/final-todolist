interface TaskDescriptionProps {
  description: string;
  editing: boolean;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const TaskDescription = ({
  description,
  editing,
  setDescription,
}: TaskDescriptionProps) => {
  const handleChangeDescription = (e: React.SyntheticEvent) => {
    const inputEl = e.target as HTMLTextAreaElement;
    setDescription(inputEl.value);
  };

  return (
    <>
      <textarea
        className="w-full resize-none focus:outline-none overflow-y-auto border-2 border-neutral-500 rounded-xl p-2 disabled:border-neutral-300"
        value={description}
        rows={10}
        disabled={!editing}
        onChange={handleChangeDescription}
      ></textarea>
      <div className="p-2" />
    </>
  );
};

export default TaskDescription;
