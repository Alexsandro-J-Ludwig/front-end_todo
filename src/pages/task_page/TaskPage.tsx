import Footer from "../../components/shared/Footer/Footer";
import Task from "../../components/Task/Task";
import styles from "./TaskPage.module.css";
import CreateTaskModal from "../../components/Task/createTask/CreateTask";
import { useState, useEffect} from "react";
import useAuth from "../../service/users/useAuth";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  useEffect(() => {
    if (!isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  return (
    <div className={styles["tarefasContainer"]}>
      <div>
        <h1>Minhas tarefas</h1>
      </div>
      <div>
        <Task/>
        <Footer />
      </div>
      <CreateTaskModal/>
    </div>
  );
}

export default TaskPage;
