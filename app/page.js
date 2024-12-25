"use client";

import { useState } from "react";
import styles from "./page.module.scss";

import { InputTodo } from "./components/InputTodo.jsx";
import { TodosTable } from "./components/Todostable";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([
    { taskName: "task1", dueDate: "2024-01-25", isDone: false },
    { taskName: "task2", dueDate: "2024-02-05", isDone: false },
  ]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo</h1>
      </header>
      <main className={styles.main}>
        <InputTodo tasks={tasks} setTasks={setTasks} taskName={taskName} setTaskName={setTaskName} dueDate={dueDate} setDueDate={setDueDate}/>
        <TodosTable tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
}
