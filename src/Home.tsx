import { IonIcon } from "@ionic/react";
import {
  alertCircleOutline,
  closeCircleOutline,
  checkmarkOutline,
} from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const handleChecking = () => {
    return setChecked((currentCheck) => {
      console.log(!currentCheck);
      return !currentCheck;
    });
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-neutral-300 h-48 flex items-center flex-col">
        <div className="p-6" />
        <h2 className="text-neutral-800 text-4xl font-extrabold tracking-wider">
          Final To-do List
        </h2>
        <div className="p-4" />
        <form
          className="max-w-xl w-full grid grid-cols-[1fr,100px] h-14"
          onSubmit={formSubmit}
        >
          <input
            className="border-2 border-neutral-600 border-r-0 w-[105%] pr-[7%] pl-[2%] text-lg rounded-xl font-medium focus:outline-none"
            type="text"
          />
          <input
            className="bg-neutral-600 text-white rounded-xl cursor-pointer font-medium text-lg focus:outline-none focus:scale-105 hover:scale-105 transition-transform"
            type="submit"
            value="ADD"
          />
        </form>
      </section>
      <section className="flex-1 flex flex-col items-center">
        <div className="p-2" />
        <div className="max-w-xl w-full grid auto-rows-[56px] gap-4">
          {/* TASKS */}
          <div className="w-full h-full grid grid-cols-[60px,1fr,60px,60px] bg-neutral-200 rounded-lg">
            <div
              className="h-10 w-10 bg-white rounded-[50%] self-center ml-3 border border-neutral-400 grid place-content-center"
              onClick={handleChecking}
            >
              {checked && (
                <IonIcon className="text-2xl" icon={checkmarkOutline} />
              )}
            </div>
            <div
              className={`self-center pl-[.72rem] whitespace-nowrap overflow-hidden text-ellipsis ${
                checked && `line-through`
              }`}
            >
              Task 1
            </div>
            <div className="flex items-center justify-center">
              <Link
                to={"/task/"}
                className="text-2xl cursor-pointer grid place-content-center"
              >
                <IonIcon icon={alertCircleOutline} />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <IonIcon
                className="text-2xl cursor-pointer"
                icon={closeCircleOutline}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
