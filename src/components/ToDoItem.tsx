import React, { useState, useRef } from "react";
import type { ToDo } from "./ToDoContainer";
import styles from "./ToDoItem.module.css";

export const ToDoItem = ({
  toDo,
  setToDo
}: {
  toDo: ToDo;
  setToDo: React.Dispatch<React.SetStateAction<ToDo>> | any;
}) => {
  const [editable, setEditable] = useState(false);
  const inputRef = useRef(null);

  const toggleEditability = async (event: React.MouseEvent) => {
    await setEditable(true);
    inputRef.current?.focus();
  };

  const handleChange = (event: React.ChangeEvent | React.KeyboardEvent) => {
    if ((event.target as HTMLInputElement).value) {
      setToDo({
        content: (event.target as HTMLInputElement).value,
        completed: toDo.completed
      });
    } else {
      setToDo({
        content: "🥖",
        completed: toDo.completed
      });
    }
    setEditable(false);
  };

  const handleKeyDownChange = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleChange(event);
    }
  };

  return (
    <div className={styles.toDoItemWrapper} onClick={toggleEditability}>
      <button
        className={`${styles.displayButton} ${
          toDo.completed ? styles.completed : ""
        } ${editable ? styles.hidden : ""}`}
      >
        {toDo.content}
      </button>

      <input
        className={`${styles.input} ${toDo.completed ? styles.completed : ""} ${
          !editable ? styles.hidden : ""
        }`}
        onBlur={handleChange}
        onKeyDownCapture={handleKeyDownChange}
        placeholder={toDo.content}
        ref={inputRef}
      />
    </div>
  );
};
