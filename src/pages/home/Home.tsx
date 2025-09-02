import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/task_page/TaskPage')
    }

    return (
        <>
        <div className={styles.contaiener}>
            <div>
                <h1>Bem-vindo(a) a ToDo</h1>
            </div>
            <section>
                <div className={styles.loginContainer}>
                    <input className={styles.emailInput} type='email'placeholder="Email" autoComplete="off"/>
                    <input className={styles.passInput} type="password" placeholder="Senha" autoComplete="off"/>

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