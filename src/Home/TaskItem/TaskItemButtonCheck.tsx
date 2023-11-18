import { IonIcon } from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";

interface TaskItemButtonCheckProps {
  checked: boolean;
  checkTask: (id: string) => void;
  id: string;
}

const TaskItemButtonCheck = ({
  checked,
  checkTask,
  id,
}: TaskItemButtonCheckProps) => {
  const handleClick = () => {
    return checkTask(id);
  };

  return (
    <div
      className="h-10 w-10 bg-white rounded-[50%] self-center ml-3 border border-neutral-400 grid place-content-center"
      onClick={handleClick}
    >
      {checked && <IonIcon className="text-2xl" icon={checkmarkOutline} />}
    </div>
  );
};

export default TaskItemButtonCheck;
