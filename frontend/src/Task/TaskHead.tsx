interface TaskHeadProps {
  children: any;
}

const TaskHead = ({ children }: TaskHeadProps) => {
  return (
    <section className="bg-neutral-300 h-48 flex items-center flex-col">
      <div className="p-8" />
      <div className="flex items-center">{children}</div>
    </section>
  );
};

export default TaskHead;
