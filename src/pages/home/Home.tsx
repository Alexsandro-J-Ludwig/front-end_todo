import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';
import LoginModal from "../../components/user/Login";
import SignModal from "../../components/user/Sign";

function Home() {
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate("/task_page/TaskPage");
    }

    return (
        <>
        <button className={styles.botaoSign} onClick={handleClick}>Admin</button>
            <div className={styles.contaiener}>
                <div>
                    <h1>Bem-vindo(a) a ToDo</h1>
                </div>
                <section>
                    <div className={styles.loginContainer}>
                    <LoginModal/>
                    <SignModal />
                    </div>
                    
                </section>
            </div>
        </>
    )
}

export default Home;