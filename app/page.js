"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isDisplayDone, setIsDisplayDone] = useState(false);

  const [tasks, setTasks] = useState([
    { taskName: "task1", dueDate: "2024-01-25", isDone: false },
    { taskName: "task2", dueDate: "2024-02-05", isDone: false },
  ]);

  const handleIsDisplayDone = () => {
    const newIsDisplayDone = !isDisplayDone;
    setIsDisplayDone(newIsDisplayDone);
  };

  const handleCheckboxClick = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const addOnClick = () => {
    const newTasks = [
      ...tasks,
      { taskName: taskName, dueDate: dueDate, isDone: false },
    ];
    setTasks(newTasks);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo</h1>
      </header>
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.formGroups}>
            <div className={styles.inputTask}>
              <label className={styles.inputLabel}>タスク</label>
              <input
                className={styles.input}
                placeholder="タスク名を入力"
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
              />
            </div>
            <div className={styles.inputDate}>
              <label
                className={styles.inputLabel}
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate}
              >
                期限日
              </label>
              <input className={styles.input} type="date" />
            </div>
          </div>
          <div className={styles.formFooter}>
            <button className={styles.button}>追加</button>
          </div>
        </form>
        <div>
          <div className={styles.tableSetting}>
            <label>
              <input type="checkbox" onClick={handleIsDisplayDone} />
              完了タスクを表示
            </label>
          </div>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}></div>
            <div className={styles.tableHeaderCellTask}>タスク</div>
            <div className={styles.tableHeaderCell}>期限日</div>
            <div className={styles.tableHeaderCell}></div>
          </div>
          <div>
            {tasks.map((task, index) => {
              return (
                <div className={styles.tableRow} key={index}>
                  <div className={styles.tableCellCenter}>
                    <div
                      className={
                        task.isDone ? styles.checkboxChecked : styles.checkbox
                      }
                    >
                      <div onClick={() => handleCheckboxClick(index)}>
                        <FontAwesomeIcon icon={faCheck} size="2x" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.tableCellTask}>{task.taskName}</div>
                  <div className={styles.tableCell}>{task.dueDate}</div>
                  <div className={styles.tableCellCenter}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.trashIcon}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
