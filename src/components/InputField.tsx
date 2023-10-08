import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  // const InputField:React.FC<Props> = ({todo, setTodo}) => {   //above line can also be written as this but this is not used much and not advised also.
  return (
    <form className="border border-gray-600 rounded-full w-80 flex justify-evenly items-center h-11"
    onSubmit={handleAdd}
    >
      <input
        type="input"
        placeholder="Add Task"
        className="outline-none w-64"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="w-9 h-9 rounded-full bg-[#138086] -mr-2 text-white hover:scale-95"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
