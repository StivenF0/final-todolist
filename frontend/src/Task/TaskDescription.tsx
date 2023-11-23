interface TaskDescriptionProps {
  editing: boolean;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const TaskDescription = ({
  description,
  setDescription,
  editing,
}: TaskDescriptionProps) => {
  const handleChange = (e: React.SyntheticEvent) => {
    setDescription((e.target as HTMLTextAreaElement).value);
  };

  return (
    <>
      <textarea
        className="w-full resize-none focus:outline-none overflow-y-auto border-2 border-neutral-500 rounded-xl p-2 disabled:border-neutral-300"
        rows={10}
        disabled={!editing}
        onChange={handleChange}
        value={description}
      ></textarea>
      <div className="p-2" />
    </>
  );
};

export default TaskDescription;
