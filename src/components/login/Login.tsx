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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <input 
            className={styles.imputEmail}
            type='email' 
            placeholder='E-mail' 
            autoComplete='off'></input>

            <input
            className={styles.imputPass}
            type="password" 
            placeholder='Senha'   
            autoComplete='off'></input>

            <button>Entrar</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
