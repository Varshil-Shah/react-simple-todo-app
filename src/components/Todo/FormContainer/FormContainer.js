import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";

import styles from "./FormContainer.module.css";

const FormContainer = (props) => {
  const [label, setLabel] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onTodoEditing = (event) => {
    if (event.target.value.trim().length) setIsValid(true);
    setLabel(event.target.value);
  };

  const onTodoSubmit = (event) => {
    event.preventDefault();
    if (!label.trim().length) {
      setIsValid(false);
      return;
    }
    const newTodo = {
      id: Math.round(Math.random() * 100000 + 999999),
      label: label,
    };
    setLabel("");
    props.onAddNewTodo(newTodo);
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <div className={styles["form-control"]}>
        <input
          type="text"
          className={styles["input-field"]}
          placeholder="Enter your todo"
          value={label}
          onChange={onTodoEditing}
        />
        <button className={styles.button}>
          <FaPlus className={styles.icon} />
        </button>
      </div>
    </form>
  );
};

export default FormContainer;
