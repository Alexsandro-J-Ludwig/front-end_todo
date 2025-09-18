import { FaSearch, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { Box, Checkbox, IconButton, Modal, Typography } from "@mui/material";
import styles from "./ViewTask.module.css"

interface ViewTaskProps{
    id:number;
    titulo:string
    descricao:string
}

const ViewTask = ({id, titulo, descricao}:ViewTaskProps) => {
    const [open, setOpen] = useState(false);
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
                        <p className={styles["descricao"]}>{descricao}</p>
                    </Typography>

                    <Typography>
                        <div className={styles["containerCheckBox"]}>
                            <Checkbox 
                                className={styles["checkBoxComplete"]}
                                onClick={() => {
                                alert(id)
                            }}
                            ></Checkbox>
                        </div>
                       
                    </Typography>
                    
                    <div className={styles["trashButton"]}>
                        <button className={styles["trash"]}>
                            <FaTrash className={styles["icon-trash"]}/>
                        </button>
                    </div>
                    
                </Box>
            </Modal>
        </div>
        
    )
}

export default ViewTask;