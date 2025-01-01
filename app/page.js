"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { v4 as uuidv4 } from "uuid";

import { Form } from "./components/Form.jsx";
import { Table } from "./components/Table";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([
    { id: uuidv4(), name: "task1", dueDate: "2024-01-25", isDone: false },
    { id: uuidv4(), name: "task2", dueDate: "2024-02-05", isDone: false },
  ]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo</h1>
      </header>
      <main className={styles.main}>
        <Form
          tasks={tasks}
          setTasks={setTasks}
          taskName={taskName}
          onChangeName={setTaskName}
          dueDate={dueDate}
          onChangeDueDate={setDueDate}
        />
        <Table tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  );
}
