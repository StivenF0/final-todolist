import { IonIcon } from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import { useContext } from "react";
import { Context } from "..";
import axios from "axios";

interface TaskItemButtonDeleteProps {
  id: string;
}

const TaskItemButtonDelete = ({ id }: TaskItemButtonDeleteProps) => {
  const fetchTodoList = useContext(Context);

  const handleClick = async () => {
    const response = await axios.delete(
      `http://127.0.0.1:8000/task/${id}/delete/`
    );
    if (response.status !== 204) return;
    fetchTodoList();
  };

  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
      <IonIcon className="text-2xl cursor-pointer" icon={closeCircleOutline} />
    </div>
  );
};

export default TaskItemButtonDelete;
