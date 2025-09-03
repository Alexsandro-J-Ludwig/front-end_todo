import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import useAuth from "../../services/users/useAuth";
import login from "../../services/users/login";
import {useState} from 'react'

function Home() {
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleClick = async () => {
        const user = await login(email, password)

        if(user != null){
            setError(user)
            return;
        };
        
        navigate("./task_page/TaskPage")
    }

    const {isLogged} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <div className={styles.contaiener}>
            <div>
                <h1>Bem-vindo(a) a ToDo</h1>
            </div>
            <section>
                <div className={styles.loginContainer}>
                    <input className={styles.emailInput}
                     type='email'placeholder="Email" 
                     autoComplete="off" 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)}
                     />

                    <input className={styles.passInput} 
                    type="password" 
                    placeholder="Senha" 
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <a href="./signup/SingupPage">Cadatrar</a>
                </div>
                <div className={styles.botaoContainer}>
                    <button className={styles.botao} onClick={handleClick}>Entrar</button>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home;