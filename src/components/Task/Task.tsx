// Task.tsx - VERSÃO LIMPA
import { useEffect, useState } from "react";
import TaskManager from "../../service/task/TaskManager";
import { Checkbox, FormControlLabel } from "@mui/material";
import styles from "./Task.module.css"
import ViewTask from "./viewTask/ViewTask";

interface TaskAttribute{
  id:number;
  titulo:string;
  descricao?:string
}

function Task() {
  const [tasks, setTasks] = useState<TaskAttribute[]>([]);

  const loadTasks = () => {
    TaskManager.getTask().then(response => {
      if (response?.success) {
        setTasks(response.data);
      }
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const interval = setInterval(loadTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className={styles["task"]}>
      {tasks.map((task) => (
        <li key={task.id}>
          <FormControlLabel 
            control={<Checkbox />} 
            label={task.titulo} 
          />
          <ViewTask 
            id={task.id}
            titulo={task.titulo}
            descricao={task.descricao || ''}
          />
        </li>
      ))}
    </ul>
  );
}

export default Task;