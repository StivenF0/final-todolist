import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from ".";

const addTask = (value: string) => {
  const data = {
    title: value,
  };
  const response = axios.post("http://127.0.0.1:8000/add/", data);
  return response;
};

const HomeForm = () => {
  const fetchTodoList = useContext(Context);

  const inputRef = useRef<HTMLInputElement>(null);
  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    await addTask(inputRef.current.value);
    fetchTodoList();
  };

  return (
    <form
      className="max-w-xl w-full grid grid-cols-[1fr,100px] h-14"
      onSubmit={formSubmit}
    >
      <input
        className="border-2 border-neutral-600 border-r-0 w-[105%] pr-[7%] pl-[2%] text-lg rounded-xl font-medium focus:outline-none"
        type="text"
        ref={inputRef}
      />
      <input
        className="bg-neutral-600 text-white rounded-xl cursor-pointer font-medium text-lg focus:outline-none focus:scale-105 hover:scale-105 transition-transform"
        type="submit"
        value="ADD"
      />
    </form>
  );
};

export default HomeForm;
