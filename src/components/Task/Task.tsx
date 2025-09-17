import { useEffect, useState } from "react";
import TaskManager from "../../service/task/TaskManager";
import styles from "./Task.module.css";

interface TaskItem {
  id: number;
  titulo: string;
}

interface ApiResponse {
  success: boolean;
  data: TaskItem[];
}

function Task() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response: ApiResponse = await TaskManager.getTask();
        console.log('Resposta da API:', response);
        
        if (response.success && Array.isArray(response.data)) {
          setTasks(response.data);
        } else {
          console.error('Dados não são array ou falha na API:', response);
          setTasks([]);
        }
      } catch (error) {
        console.error("Erro:", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  return (
    <ul className={styles["containerTask"]}>
      {tasks.map((task) => (
        <li className={styles["tasks"]} key={task.id}>{task.titulo}</li>
      ))}
    </ul>
  );
}

export default Task;