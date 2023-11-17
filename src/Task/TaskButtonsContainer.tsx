interface TaskButtonsContainerProps {
  children: any;
}

const TaskButtonsContainer = ({ children }: TaskButtonsContainerProps) => {
  return <div className="grid grid-cols-2">{children}</div>;
};

export default TaskButtonsContainer;
