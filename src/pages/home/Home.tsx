import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import Login from "../../components/login/Login";
import { useState } from "react";

function Home() {
    const [showLogin, setShowLogin] = useState(false);

    const navigate = useNavigate();

    const handleClick = async () => {
        navigate("/task_page/TaskPage");
    }

    return (
        <>
            <div className={styles.contaiener}>
                <div>
                    <h1>Bem-vindo(a) a ToDo</h1>
                </div>
                <section>
                    <div className={styles.loginContainer}>
                        <button
                            className={styles.botaoLogin}
                            onClick={() => setShowLogin(true)}
                        >
                            Entrar
                        </button>
                        <button className={styles.botaoSign}>Cadastrar</button>
                    </div>
                </section>
                {showLogin && (
                    <Login onClose={() => setShowLogin(false)} />
                )}
            </div>
        </>
    )
}

export default Home;