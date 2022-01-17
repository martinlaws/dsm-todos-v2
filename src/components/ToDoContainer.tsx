import { useState } from "react";
import { ToDoItem } from "./ToDoItem";
import styles from "./ToDoContainer.module.css";
import { defaultToDos } from "../constants";

export interface ToDo {
  content: string;
  completed: boolean;
}

export const ToDoContainer = () => {
  const [bigTodo, setBigToDo] = useState(defaultToDos.bigThing);
  const differentBreadForBigToDo = (toDo: ToDo) => {
    if (toDo.content === "🥖") {
      setBigToDo({ ...toDo, content: "🍞" });
    } else {
      setBigToDo(toDo);
    }
  };
  const [littleToDo1, setLittleToDo1] = useState(defaultToDos.littleThings[0]);
  const [littleToDo2, setLittleToDo2] = useState(defaultToDos.littleThings[1]);
  const [littleToDo3, setLittleToDo3] = useState(defaultToDos.littleThings[2]);
  return (
    <div className={styles.toDoContainer}>
      <div className={styles.bigToDo}>
        <ToDoItem toDo={bigTodo} setToDo={differentBreadForBigToDo} />
      </div>
      <div className={styles.littleToDoContainer}>
        <ToDoItem toDo={littleToDo1} setToDo={setLittleToDo1} />
        <ToDoItem toDo={littleToDo2} setToDo={setLittleToDo2} />
        <ToDoItem toDo={littleToDo3} setToDo={setLittleToDo3} />
      </div>
    </div>
  );
};
