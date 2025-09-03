import Nav from "../../components/shared/Nav/Nav.module"
import Footer from "../../components/shared/Footer/Footer";
import Task from "../../components/Task/Task";

function TaskPage(){
    return(
        <>
            <div>
                <Nav/>
                <Task/>
                <Footer/>
            </div>
        </>
    )
}

export default TaskPage;