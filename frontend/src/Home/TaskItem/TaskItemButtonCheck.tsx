import { IonIcon } from "@ionic/react";
import axios from "axios";
import { checkmarkOutline } from "ionicons/icons";
import { useContext } from "react";
import { Context } from "..";

interface TaskItemButtonCheckProps {
  checked: boolean;
  id: string;
}

const TaskItemButtonCheck = ({ checked, id }: TaskItemButtonCheckProps) => {
  const fetchTodoList = useContext(Context);

  const handleClick = async () => {
    const response = await axios.post(
      `http://127.0.0.1:8000/task/${id}/check/`
    );
    if (response.status !== 200) return;
    fetchTodoList();
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
