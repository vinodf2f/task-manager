import {
  onValue,
  push,
  set,
  ref,
  off,
  remove,
  onChildChanged,
} from "firebase/database";

import { database } from "./config";

const tasksRef = ref(database, "tasks");

export function attachTaskListener(onTaskListChange) {
  onValue(tasksRef, (snapshot) => {
    onTaskListChange(snapshot.toJSON());
  });
}

export function addNewTask(data) {
  const pushTaskRef = push(tasksRef);

  set(pushTaskRef, data);
}

export function updateTask({ id, data }) {
  set(ref(database, "tasks/" + id), data);
}

export function detachListener() {
  off(tasksRef);
}

export function removeTask(id) {
  remove(ref(database, "tasks/" + id));
}
