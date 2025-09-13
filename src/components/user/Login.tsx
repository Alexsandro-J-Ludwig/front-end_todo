import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./Login.module.css"
import login from '../../service/users/login' // Lembre-se de tipar esta função também
import { useState } from 'react';

// Você pode definir um tipo para as props, se houver, ou usar React.FC
const LoginModal: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Aqui você define o tipo das variáveis de estado como string
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("") 

  return (
    <div>
      <button className={styles["modalButton"]} onClick={handleOpen}>Login</button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className={styles.container}>
          <header className={styles["modal-modal-title"]}>
            <h1 className={styles["titulo"]}>
              Login
            </h1>
          </header>

          
          <Typography className={styles["emailInput"]}>
            <input  
              className={styles['imputEmail']}
              type='email' 
              autoComplete='off'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              placeholder='Email'
              autoCapitalize='off'
              autoSave='off'
            ></input>
          </Typography>

          <Typography className={styles["passInput"]}>
            <input
              className={styles["imputPass"]}
              type="password" 
              value={password}  
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              autoComplete='off'
              placeholder='Senha'
              autoSave='off'
              ></input>
          </Typography>

          <Typography className={styles["botaoLogin"]}>
            <button className={styles.entrar} onClick={() => {
              login(email, password)
            }}>Entrar</button>            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;