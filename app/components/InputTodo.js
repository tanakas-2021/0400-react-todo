import styles from "./InputTodo.module.scss";

export const InputTodo = (props) => {
  const { tasks, setTasks, taskName, setTaskName, dueDate, setDueDate } = props;
  const addOnClick = () => {
    setTaskName("");
    setDueDate("");
    const newTasks = [
      ...tasks,
      { taskName: taskName, dueDate: dueDate, isDone: false },
    ];
    setTasks(newTasks);
  };

  return (
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
  );
};
