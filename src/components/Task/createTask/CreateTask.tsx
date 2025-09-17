import { useState } from "react";
import styles from "./CreateTask.module.css";
import { Box, Modal, Typography } from "@mui/material";
import TaskManager from "../../../service/task/TaskManager";

const CreateTaskModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleRegister = async () => {
    let error:string = ''

    if(titulo){
        error = "Titulo deve ser preenchido";
    };
    
    if(error){
        try {
            const result = await TaskManager.task(titulo, descricao);
            console.log(`Tarefa criada com sucesso: ${result.data}`);
        } catch (error:any) {
        console.error(`Não foi possível criar a tarefa: ${error.message}`);
    }
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
