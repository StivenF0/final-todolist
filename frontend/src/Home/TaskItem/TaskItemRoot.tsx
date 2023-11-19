interface TaskItemRootProps {
  children: any;
}

const TaskItemRoot = ({ children }: TaskItemRootProps) => {
  return (
    <div className="w-full h-full grid grid-cols-[60px,1fr,60px,60px] bg-neutral-200 rounded-lg">
      {children}
    </div>
  );
};

export default TaskItemRoot;
