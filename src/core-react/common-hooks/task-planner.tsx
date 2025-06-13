import { TaskList } from "./task-list";
import { type Task } from "./task-item";
import { useReducer, useEffect, useCallback } from "react";
import { TaskForm } from "./task-form";
import { useRef } from "react";
import { SizeDebugger } from "./size-debugger";

const getTasks = async (): Promise<Task[]> => {
  const res = await fetch("/tasks.json");
  const data: Task[] = await res.json();
  return data;
};

// Actions
type Action =
  | { type: "GET"; payload: Task[] }
  | { type: "ADD"; payload: Task }
  | { type: "DELETE"; payload: string }
  | { type: "TOGGLE"; payload: string };

const taskManager = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "GET":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((task) => task.id !== action.payload);
    case "TOGGLE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

export const TaskPlanner = () => {
  const [state, dispatch] = useReducer(taskManager, []);
  const taskListArea = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      dispatch({ type: "GET", payload: data });
    };
    fetchData();
  }, []);

  const handleToggle = useCallback(
    (id: string) => {
      dispatch({ type: "TOGGLE", payload: id });
    },
    [dispatch]
  );

  const handleAddTask = (task: Task) => {
    dispatch({ type: "ADD", payload: task });
  };

  return (
    <div
      ref={taskListArea}
      className="max-w-2xl flex items-center justify-center flex-col mx-auto pt-20 gap-4"
    >
      <TaskForm onAdd={handleAddTask} lastCount={state.length + 1} />
      <TaskList state={state} onToggle={handleToggle} />;
      <SizeDebugger targetRef={taskListArea} />
    </div>
  );
};
