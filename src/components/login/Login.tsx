import { Dialog } from 'primereact/dialog';
import styles from "./Login.module.css";

interface LoginProps {
  onClose: () => void;
}

export default function Login({ onClose }: LoginProps) {
  return (
    <Dialog
        className={styles.loginContainer}
        visible={true}
        modal
        onHide={onClose}
        header="Login"
        style={{ width: '10vw' }}
    >
      <div>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button onClick={onClose}>Entrar</button>
      </div>
    </Dialog>
  );
}
