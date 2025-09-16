import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./Login.module.css"
import login from "../../../service/users/login"
import { useState } from 'react';
import UserErrorModal from '../userError/userError';

const LoginModal: React.FC = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>('');

  const regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleRegister = () => {
    const errors: string[] = [];

    // Validação de campos vazios
    if (!email || !password) {
        errors.push("Nenhum campo pode estar vazio.");
    }

    // Validação do email com regex
    if (email && !regexEmail.test(email)) {
        errors.push("\nPor favor, insira um email válido.");
    }

    // Validação de senha
    if (password.length < 8) {
        errors.push("\nSenha deve conter 8 ou mais caracteres.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("\nSenha deve conter ao menos uma letra maiúscula.");
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
        errors.push("\nSenha deve conter um caractere especial: $ # . /");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("\nSenha deve ter ao menos um número.");
    }

    login(email, password)
    // Verifica se há algum erro e define a mensagem de erro
    if (errors.length > 0) {
        setErrorMsg(errors.join(`\n`)); // Junta todas as mensagens de erro em uma string
    } else {
        // Se todas as validações passarem, limpa a mensagem de erro e executa a ação
        setErrorMsg('');
    }
};

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
          
          {errorMsg && (
            <UserErrorModal 
              errorMsg={errorMsg} 
              open={true} 
              onClose={() => setErrorMsg('')} // fecha limpando a mensagem
            />
          )}

          <Typography className={styles["botaoLogin"]}>
            <button className={styles.entrar} onClick={() => {
              handleRegister()
            }}>Entrar</button>            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;