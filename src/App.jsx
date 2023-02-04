import "./App.css";
import useTasks from "./hooks/useTasks";
import TaskCard from "./components/TaskCard";
import AddNewCard from "./components/AddNewCard";

function App() {
  const [tasks, isLoading, removeTask, updateTask, addNewTask] = useTasks();

  const onAddNewTask = () => {
    addNewTask({
      value: "",
      startDate: new Date(),
      endDate: new Date(),
      status: "todo",
    });
  };

  if (isLoading && !tasks.length) return <p>Loading tasks</p>;
  const taskKeys = Object.keys(tasks);
  return (
    <div className="card__container">
      {taskKeys.map((item, index) => {
        const key = `${item}${tasks[item].value} ${tasks[item].status}`;
        return (
          <TaskCard
            key={key}
            data={{ id: item, ...tasks[item] }}
            updateTask={updateTask}
            handleClose={removeTask}
          />
        );
      })}
      <AddNewCard addNewTask={onAddNewTask} />
    </div>
  );
}

export default App;
