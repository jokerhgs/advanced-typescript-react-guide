import { memo } from "react";

export type Task = {
  id: string;
  name: string;
  completed: boolean;
  onToggle: (id: string) => void;
};

const TaskItemComponent = ({ id, name, completed, onToggle }: Task) => {
  return (
    <li className="group flex w-full items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <label className="flex items-center w-full cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          aria-label={`Mark task "${name}" as ${
            completed ? "incomplete" : "complete"
          }`}
        />
        <span
          className={`ml-3 text-gray-800 ${
            completed ? "line-through text-gray-400" : ""
          }`}
        >
          {name}
        </span>
      </label>
      <button
        onClick={() => onToggle(id)}
        className="ml-auto opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 focus:opacity-100 transition-opacity duration-200"
        aria-label={`Toggle task "${name}"`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14"
          />
        </svg>
      </button>
    </li>
  );
};

export const TaskItem = memo(TaskItemComponent);
