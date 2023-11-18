import { IonIcon } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";

interface TaskItemButtonDeleteProps {
  id: string;
  deleteTask: (id: string) => void;
}

const TaskItemButtonDelete = ({
  id,
  deleteTask,
}: TaskItemButtonDeleteProps) => {
  const handleClick = () => {
    deleteTask(id);
  };
  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
      <IonIcon className="text-2xl cursor-pointer" icon={closeCircleOutline} />
    </div>
  );
};

export default TaskItemButtonDelete;
