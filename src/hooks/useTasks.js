import { useEffect, useState } from "react";
import { detachListener, attachTaskListener } from "../firebase/taskHelpers";
import { removeTask, updateTask, addNewTask } from "../firebase/taskHelpers";

// A hook adaptor to manage tasks
function useTasks() {
  const [tasks, setTasks] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleTaskListChange = (data) => {
    setLoading(true);
    if (data) {
      setTasks(data);
    } else {
      setTasks({});
    }
    setLoading(false);
  };

  const _attachTaskListener = () => {
    attachTaskListener(handleTaskListChange);
  };

  useEffect(() => {
    _attachTaskListener();

    return () => {
      detachListener();
    };
  }, []);

  return [tasks, isLoading, removeTask, updateTask, addNewTask];
}

export default useTasks;
