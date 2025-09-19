import { useState } from "react";
import styles from "./CreateTask.module.css";
import { Box, Modal, Typography } from "@mui/material";
import TaskManager from "../../../service/task/TaskManager";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../service/users/useAuth";

const CreateTaskModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();
  const { isLogged, loading } = useAuth();

  const logginValidate = () => {
  if (!loading && !isLogged) {
    navigate("/");
    return false;
  }
  return true;
}

  const handleRegister = async () => {
  if (!logginValidate()) return;

  if (!titulo) {
    alert("Titulo deve ser preenchido");
    return;
  }

  try {
    const result = await TaskManager.task(titulo, descricao);
    console.log(`Tarefa criada com sucesso: ${result.data}`);
    setTitulo("");
    setDescricao("");
    setOpen(false); // fecha modal
  } catch (error:any) {
    console.error(`Não foi possível criar a tarefa: ${error.message}`);
    alert("Erro ao criar tarefa");
  }
}
  
  return (
    <div>
      <button className={styles["createTaskButton"]} onClick={handleOpen}>
        Adicionar tarefa
      </button>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles["addTaskContainer"]}>

          <header className={styles["tituloCOntainer"]}>
            <h1 className={styles["titulo"]}>Criar tarefa</h1>
          </header>

          <Typography>
            <div className={styles["tituloTask"]}>
              <input
                className={styles["taskTitulo"]}
                placeholder="Titulo"
                autoComplete="off"
                autoSave="off"
                value={titulo}
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
              />
            </div>

            <div className={styles["descricaoTask"]}>
              <input
                className={styles["taskDescricao"]}
                placeholder="Descricao"
                autoComplete="off"
                autoSave="off"
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
              />
            </div>
          </Typography>

          <Typography className={styles["addButton"]}>
            <button className={styles["addTask"]}
                onClick={() => {
                  logginValidate()
                    handleRegister()
                }}
            >Adicionar</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTaskModal;
