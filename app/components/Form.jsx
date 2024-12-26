import styles from "./Form.module.scss";

export const Form = ({
  tasks,
  setTasks,
  taskName,
  setTaskName,
  dueDate,
  setDueDate,
}) => {
  const validateRequiredFields = () => {
    if (taskName === "") {
      window.alert("タスク名を入力してください");
      return false;
    } else if (dueDate === "") {
      window.alert("期限日を入力してください");
      return false;
    } else {
      return true;
    }
  };

  const validateDueDate = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    const inputDate = new Date(dueDate).setHours(0, 0, 0, 0);

    if (inputDate <= today) {
      window.alert("期限日は今日以降を指定してください");
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = () => {
    if (validateRequiredFields() && validateDueDate()) {
      setTaskName("");
      setDueDate("");
      const newTasks = [...tasks, { name: taskName, dueDate, isDone: false }];
      setTasks(newTasks);
    }
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
        <button className={styles.addButton} onClick={onSubmit}>
          追加
        </button>
      </div>
    </div>
  );
};
