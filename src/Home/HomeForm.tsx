import { useRef } from "react";

interface HomeFormProps {
  addTask: (title: string, description?: string) => void;
}

const HomeForm = ({ addTask }: HomeFormProps) => {
  const inputFieldRef = useRef<HTMLInputElement>(null);

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputFieldRef.current) return;
    addTask(inputFieldRef.current.value);
    inputFieldRef.current.value = "";
  };

  return (
    <form
      className="max-w-xl w-full grid grid-cols-[1fr,100px] h-14"
      onSubmit={formSubmit}
    >
      <input
        className="border-2 border-neutral-600 border-r-0 w-[105%] pr-[7%] pl-[2%] text-lg rounded-xl font-medium focus:outline-none"
        type="text"
        ref={inputFieldRef}
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
