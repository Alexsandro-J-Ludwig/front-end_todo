import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer/Footer';
import "./App.css";
import Home from './pages/home/Home';
import TaskPage from './pages/task_page/TaskPage';
import './styles/global.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task_page/TaskPage' element={<TaskPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
