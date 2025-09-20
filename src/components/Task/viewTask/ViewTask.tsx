import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import styles from "./ViewTask.module.css"
import TaskManager from "../../../service/task/TaskManager";

interface ViewTaskProps{
    id:number;
    titulo:string
    descricao:string
}

// Atualiza a descrição da tarefa
const handleUpdateDescricao = async (id:number, descricao:string) => {
    const response = await TaskManager.updateTask(id, descricao);

    if (response?.success) {
        console.log(`Tarefa atualizada com sucesso.`);
    }
}

// Deleta a tarefa
const handleDelete = async (id:number) => {
    const response = await TaskManager.deleteTask(id);
    if (response?.success) {
        console.log(`Tarefa deletada com sucesso.`);
    }
}

const ViewTask = ({id, titulo, descricao}:ViewTaskProps) => {
    const [open, setOpen] = useState(false);
    const [descricaoState, setDescricaoState] = useState(descricao);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className={styles["modalButton"]} onClick={handleOpen}>
                <FaSearch className={styles["lupa"]}/>
                </button>

            <Modal open={open} onClose={handleClose}>
                <Box className={styles["container"]}>
                    <Typography>
                        <h1 className={styles["titulo"]}>{titulo}</h1>
                    </Typography>

                    <Typography>
                        <textarea 
                            className={styles["descricao"]}
                            value={descricaoState}
                            onChange={(e) => setDescricaoState(e.target.value)}
                        />
                    </Typography>
                    
                    <div className={styles["buttonActions"]}>
                        <button className={styles["edit"]}
                            onClick={() => handleUpdateDescricao(id, descricaoState)}
                        >
                            <FaEdit className={styles["icon-edit"]}/>
                        </button>

                        <button className={styles["trash"]}
                            onClick={() => {
                                handleDelete(id);
                            }}
                        >
                            <FaTrash className={styles["icon-trash"]}/>
                        </button>
                    </div>
                    
                </Box>
            </Modal>
        </div>
        
    )
}

export default ViewTask;