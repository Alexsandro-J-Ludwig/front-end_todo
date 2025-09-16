// userError/userError.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Snackbar  from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert"
import styles from "./UserError.module.css"

// Define a interface para as props
interface UserErrorModalProps {
    errorMsg: string;
    open: boolean;
    onClose: () => void;
}

const UserErrorModal: React.FC<UserErrorModalProps> = ({ errorMsg, open, onClose }) => {
    return (
        <Snackbar  
            open={open} 
            onClose={onClose}
            className={styles["snackbar"]} 
            key={CSSTransition ? CSSTransition.name : ''}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
            <Box className={styles["container"]}>
                <Alert 
                    onClose={onClose} 
                    className={styles["alerta"]}
                    icon={false}
                    sx={{backgroundColor: "#fff0f0", opacity:"70%", color: "black", width:"300px", alignItems: "center", justifyContent: "center"}}
                    >
                    {errorMsg}
                </Alert>
            </Box>
        </Snackbar >
    );
}

export default UserErrorModal;