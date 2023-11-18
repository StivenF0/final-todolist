import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

interface TaskItemButtonInfoProps {
  id: string;
}

const TaskItemButtonInfo = ({ id }: TaskItemButtonInfoProps) => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={`/task/?id=${id}`}
        className="text-2xl cursor-pointer grid place-content-center"
      >
        <IonIcon icon={alertCircleOutline} />
      </Link>
    </div>
  );
};

export default TaskItemButtonInfo;
