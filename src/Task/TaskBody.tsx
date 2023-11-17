interface TaskBodyProps {
  children: any;
}

const TaskBody = ({ children }: TaskBodyProps) => {
  return (
    <section className="flex-1 flex flex-col items-center">
      <div className="p-2" />
      <div className="max-w-xl w-full gap-4">
        <h3 className="text-xl font-bold text-neutral-800">Description</h3>
        <div className="p-2" />
        {children}
      </div>
    </section>
  );
};

export default TaskBody;
