import React from "react";

import { FaTrash } from "react-icons/fa";

import styles from "./Todo.module.css";

const Todo = (props) => {
  const deleteTodo = () => {
    console.log("Press", props.id);
    props.onDeleteTodo(props.id);
  };

  return (
    <div className={styles.todo}>
      <p className={styles.label}>{props.label}</p>
      <button className={styles.button} onClick={deleteTodo}>
        <FaTrash className={styles.icon} />
      </button>
    </div>
  );
};

export default Todo;
