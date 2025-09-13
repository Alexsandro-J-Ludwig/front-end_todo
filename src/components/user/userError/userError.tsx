// userError/userError.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./UserError.module.css"

// Define a interface para as props
interface UserErrorModalProps {
    errorMsg: string;
    open: boolean;
    onClose: () => void;
}

const UserErrorModal: React.FC<UserErrorModalProps> = ({ errorMsg, open, onClose }) => {

    return (
        <Modal open={open} onClose={onClose}>
            <Box className={styles["container"]}>
                <Typography component="h1" className={styles["titulo"]}>
                    Ops! Ocorreu um erro
                </Typography>
                <Typography component='p' className={styles["message"]}>
                    {errorMsg}
                </Typography>
            </Box>
        </Modal>
    );
}

export default UserErrorModal;