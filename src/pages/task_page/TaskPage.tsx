import Footer from "../../components/shared/Footer/Footer";
import Task from "../../components/Task/Task";
import styles from "./TaskPage.module.css";
import CreateTaskModal from "../../components/Task/createTask/CreateTask";

function TaskPage() {

  return (
    <div className={styles["tarefasContainer"]}>
      <div>
        <h1>Minhas tarefas</h1>
      </div>
      <div className="displayTasksContainer">
        <Task />
      </div>
      <CreateTaskModal />
      <Footer />
    </div>
  );
}

export default TaskPage;
