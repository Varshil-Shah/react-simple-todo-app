import React from "react";

import styles from "./TodoList.module.css";

import Todo from "./Todo";

const TodoList = (props) => {
  let htmlElement = <p className={styles.error}>No todos found!</p>;

  if (props.items.length > 0) {
    htmlElement = props.items.map((todo) => (
      <Todo
        label={todo.label}
        key={todo.id}
        id={todo.id}
        onDeleteTodo={props.onDeleteTodo}
      />
    ));
  }

  return <div className={styles["todo-list"]}>{htmlElement}</div>;
};

export default TodoList;
