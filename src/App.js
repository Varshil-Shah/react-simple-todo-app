import React, { useState } from "react";

import Container from "./components/UI/Container";
import Heading from "./components/Todo/Heading/Heading";
import FormContainer from "./components/Todo/FormContainer/FormContainer";
import TodoList from "./components/Todo/Todos/TodoList";
import Footer from "./components/Todo/Footer/Footer";

import styles from "./App.module.css";

const DUMMY_DATA = [
  { id: "e1", label: "Go to gym" },
  { id: "e2", label: "Complete react course" },
];

const App = () => {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const addNewTodo = (todo) => {
    setTodos((prevState) => [todo, ...prevState]);
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={styles.app}>
      <Container>
        <Heading />
        <FormContainer onAddNewTodo={addNewTodo} />
        <TodoList items={todos} onDeleteTodo={deleteTodo} />
        <Footer items={todos} onClearAllTodos={clearAllTodos} />
      </Container>
    </div>
  );
};

export default App;
