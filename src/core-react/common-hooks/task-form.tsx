import { useState } from "react";
import { type Task } from "./task-item";

type Props = {
  onAdd: (task: Task) => void;
  lastCount: number;
};

export const TaskForm = ({ lastCount, onAdd }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newTask: Task = {
      id: String(lastCount),
      name: name.trim(),
      completed: false,
      onToggle: () => {},
    };

    onAdd(newTask);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
      />
      <button
        type="submit"
        disabled={!name.trim()}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          name.trim()
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Add
      </button>
    </form>
  );
};
