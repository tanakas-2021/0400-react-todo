import styles from "./Table.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Table = ({ tasks, setTasks }) => {
  const [isDisplayDone, setIsDisplayDone] = useState(false);
  const handleIsDisplayDone = () => {
    const newIsDisplayDone = !isDisplayDone;
    setIsDisplayDone(newIsDisplayDone);
  };
  const toggleTaskStatus = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  const deleteOnClick = (index) => {
    const isConfirmed = window.confirm("タスクを削除しますか？");
    if (isConfirmed) {
      const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(newTasks);
    }
  };

  const filteredTasks = tasks.filter((it) => isDisplayDone || !it.isDone);

  return (
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
        {filteredTasks.map((task, index) => {
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
                      onClick={() => toggleTaskStatus(index)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.tableCellTask}>{task.name}</div>
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
        })}
      </div>
    </div>
  );
};
