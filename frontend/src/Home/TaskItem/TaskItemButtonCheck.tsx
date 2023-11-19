import { IonIcon } from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";

interface TaskItemButtonCheckProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskItemButtonCheck = ({
  checked,
  setChecked,
}: TaskItemButtonCheckProps) => {
  const handleChecking = () => {
    return setChecked((currentCheck) => {
      console.log(!currentCheck);
      return !currentCheck;
    });
  };

  return (
    <div
      className="h-10 w-10 bg-white rounded-[50%] self-center ml-3 border border-neutral-400 grid place-content-center"
      onClick={handleChecking}
    >
      {checked && <IonIcon className="text-2xl" icon={checkmarkOutline} />}
    </div>
  );
};

export default TaskItemButtonCheck;
