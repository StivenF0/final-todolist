interface TaskItemTitleProps {
  children: any;
  checked: boolean;
}

const TaskItemTitle = ({ children, checked }: TaskItemTitleProps) => {
  return (
    <div
      className={`self-center pl-[.72rem] whitespace-nowrap overflow-hidden text-ellipsis ${
        checked && `line-through`
      }`}
    >
      {children}
    </div>
  );
};

export default TaskItemTitle;
