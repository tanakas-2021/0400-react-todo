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

  const doneTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: true } : task
      )
    );
  };

  const addOnClick = () => {
    setTaskName("");
    setDueDate("");
    const newTasks = [
      ...tasks,
      { taskName: taskName, dueDate: dueDate, isDone: false },
    ];
    setTasks(newTasks);
  };

  const deleteOnClick = (index) => {
    const isConfirmed = window.confirm("タスクを削除しますか？");
    if (isConfirmed) {
      const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(newTasks);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Todo</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
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
              <label className={styles.inputLabel} value={dueDate}>
                期限日
              </label>
              <input
                className={styles.input}
                type="date"
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate}
              />
            </div>
          </div>
          <div className={styles.formFooter}>
            <button className={styles.button} onClick={addOnClick}>
              追加
            </button>
          </div>
        </div>
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
              //isDisplayDone(完了タスクの表示非表示)=falseかつ、タスクが完了の場合、そのタスクは表示しない
              if (!isDisplayDone && task.isDone === true) {
                return null;
              } else {
                return (
                  <div className={styles.tableRow} key={index}>
                    <div className={styles.tableCellCenter}>
                      <div
                        className={
                          task.isDone ? styles.checkboxChecked : styles.checkbox
                        }
                      >
                        <div>
                          <FontAwesomeIcon
                            icon={faCheck}
                            size="2x"
                            onClick={() => doneTask(index)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.tableCellTask}>{task.taskName}</div>
                    <div className={styles.tableCell}>{task.dueDate}</div>
                    <div className={styles.tableCellCenter}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className={styles.trashIcon}
                        onClick={() => deleteOnClick(index)}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </main>
    </>
  );
}
