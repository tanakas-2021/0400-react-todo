import styles from "./Todostable.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export const TodosTable = (props) => {
  const { tasks, setTasks } = props;
  const [isDisplayDone, setIsDisplayDone] = useState(false);
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
  const deleteOnClick = (index) => {
    const isConfirmed = window.confirm("タスクを削除しますか？");
    if (isConfirmed) {
      const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(newTasks);
    }
  };

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
  );
};
