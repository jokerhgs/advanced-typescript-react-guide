import { useState } from "react";
import { TaskItem, type Task } from "./task-item";

export const TaskList = ({
  state,
  onToggle,
}: {
  state: Task[];
  onToggle: (id: string) => void;
}) => {
  const [filter, setFilter] = useState<"all" | "todo" | "completed">("all");

  const filteredTasks = state.filter((task) => {
    if (filter === "todo") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const activeCount = state.filter((task) => !task.completed).length;
  const completedCount = state.length - activeCount;

  return (
    <div className="p-6 mx-auto bg-white rounded-lg shadow-md w-full">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Tasks</h3>
        <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
          {state.length} {state.length === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Filter Buttons */}
      <div className="flex mb-4 space-x-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === "all"
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          All ({state.length})
        </button>
        <button
          onClick={() => setFilter("todo")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === "todo"
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Todo ({activeCount})
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            filter === "completed"
              ? "bg-blue-100 text-blue-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-gray-500">
            {filter === "all"
              ? "No tasks found. Add one to get started!"
              : filter === "todo"
              ? "No todo tasks remaining!"
              : "No completed tasks yet!"}
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
