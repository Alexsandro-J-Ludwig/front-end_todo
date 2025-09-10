import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import LoginModal from "../../components/login/Login";

function Home() {
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
                    <LoginModal/>
                        <button className={styles.botaoSign}>Cadastrar</button>
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Home;