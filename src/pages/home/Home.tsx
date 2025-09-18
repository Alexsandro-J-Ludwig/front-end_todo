import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import LoginModal from "../../components/user/userLogin/Login";
import SignModal from "../../components/user/userSign/Sign";
import { useEffect } from "react";
import useAuth from "../../service/users/useAuth";

function Home() {
  const navigate = useNavigate();
  const { isLogged } = useAuth();

  useEffect(() => {
      if (!isLogged) {
        navigate("/task_page/TaskPage");
      }
    }, [isLogged, navigate]);

  return (
    <>
      <div className={styles.contaiener}>
        <div>
          <h1 className={styles["titulo"]}>Bem-vindo(a) a ToDo</h1>
        </div>
        <section>
          <div className={styles.loginContainer}>
            <LoginModal />
            <SignModal />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
