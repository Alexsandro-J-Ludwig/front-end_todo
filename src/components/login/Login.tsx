import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./Login.module.css"

export default function LoginModal() {

  //useStates de 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Modal de login do usuário
  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.container}>

          <Typography className={styles["modal-modal-title"]} variant="h6" component="h2">
            Login
          </Typography>

          <Typography className={styles["emailInput"]}>
            <input  
              className={styles['imputEmail']}
              type='email' 
              placeholder='E-mail' 
              autoComplete='off'
              ></input>
          </Typography>

          <Typography className={styles["passInput"]}>
            <input
              className={styles["imputPass"]}
              type="password" 
              placeholder='Senha'   
              autoComplete='off'></input>
          </Typography>

          <Typography className={styles["botaoLogin"]}>
            <button className={styles.entrar}>Entrar</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
