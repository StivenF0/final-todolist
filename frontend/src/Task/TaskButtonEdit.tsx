import { IonIcon } from "@ionic/react";
import { pencilOutline } from "ionicons/icons";

interface TaskButtonEditProps {
  title: string;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskButtonEdit = ({ title, setEditing }: TaskButtonEditProps) => {
  const handleEnablingEditing = () => {
    if (title == "") return;
    return setEditing((currentEditing) => {
      return !currentEditing;
    });
  };

  return (
    <button
      className="grid place-content-center"
      onClick={handleEnablingEditing}
    >
      <IonIcon className="text-4xl font-semibold" icon={pencilOutline} />
    </button>
  );
};

export default TaskButtonEdit;
