interface TaskRootProps {
  children: any;
}

const TaskRoot = ({ children }: TaskRootProps) => {
  return <main className="flex flex-col min-h-screen">{children}</main>;
};

export default TaskRoot;
