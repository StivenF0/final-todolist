import { IonIcon } from "@ionic/react";
import { pencilOutline } from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Task = () => {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("Task 1");

  const getSize = () =>
    title.length <= 1 ? 1 : title.length > 25 ? 25 : title.length - 1;

  const handleChecking = () => {
    return setChecked((currentCheck) => {
      return !currentCheck;
    });
  };

  const handleEnablingEditing = () => {
    if (title == "") return;
    return setEditing((currentEditing) => {
      return !currentEditing;
    });
  };

  const handleTitleEditing = (e: React.SyntheticEvent) => {
    const inputEl = e.target as HTMLInputElement;
    const size = getSize();

    inputEl.setAttribute("size", size.toString());
    setTitle(inputEl.value);
  };

  const handleChangeDescription = (e: React.SyntheticEvent) => {
    const inputEl = e.target as HTMLTextAreaElement;
    setDescription(inputEl.value);
  };

  const handleSave = () => {
    console.log("save");
    return;
  };

  const handleDelete = () => {
    console.log("delete");
    return;
  };

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-neutral-300 h-48 flex items-center flex-col">
        <div className="p-8" />
        <div className="flex items-center">
          <input
            className="w-5 h-5"
            type="checkbox"
            defaultChecked={checked}
            onClick={handleChecking}
          />
          <div className="p-2" />
          <input
            className={`focus:outline-none text-neutral-800 text-4xl font-extrabold tracking-wider disabled:bg-neutral-300 pl-2 monofont ${
              checked && "line-through"
            }`}
            type="text"
            value={title}
            onChange={handleTitleEditing}
            disabled={!editing}
            size={getSize()}
          />
          <div className="p-1" />
          <button
            className="grid place-content-center"
            onClick={handleEnablingEditing}
          >
            <IonIcon className="text-4xl font-semibold" icon={pencilOutline} />
          </button>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center">
        <div className="p-2" />
        <div className="max-w-xl w-full gap-4">
          <h3 className="text-xl font-bold text-neutral-800">Description</h3>
          <div className="p-2" />
          <textarea
            className="w-full resize-none focus:outline-none overflow-y-auto border-2 border-neutral-500 rounded-xl p-2 disabled:border-neutral-300"
            value={description}
            rows={10}
            disabled={!editing}
            onChange={handleChangeDescription}
          ></textarea>
          <div className="p-2" />
          <div className="grid grid-cols-2">
            <button
              className="border-2 border-neutral-600 text-neutral-800 rounded-l-full border-r h-10 text-xl font-semibold"
              onClick={handleSave}
            >
              <Link to="/" className="h-full w-full">
                Save
              </Link>
            </button>
            <button
              className="border-2 border-neutral-600 text-neutral-800 rounded-r-full border-l h-10 text-xl font-semibold"
              onClick={handleDelete}
            >
              <Link to="/" className="h-full w-full">
                Delete
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Task;
