import { IonIcon } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";

const TaskItemButtonDelete = () => {
  return (
    <div className="flex items-center justify-center">
      <IonIcon className="text-2xl cursor-pointer" icon={closeCircleOutline} />
    </div>
  );
};

export default TaskItemButtonDelete;
