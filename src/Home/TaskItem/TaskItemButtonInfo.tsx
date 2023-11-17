import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

const TaskItemButtonInfo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        to={"/task/"}
        className="text-2xl cursor-pointer grid place-content-center"
      >
        <IonIcon icon={alertCircleOutline} />
      </Link>
    </div>
  );
};

export default TaskItemButtonInfo;
