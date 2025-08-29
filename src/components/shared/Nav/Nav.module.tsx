import Hamburger from "../Hamburger/Hamburger"
import styles from "./Nav.module.css"
import { useState } from "react"

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburgerOpne = () => {
        setHamburgerOpen(!hamburgerOpen)
    }   

    return (
        <div className={styles.navigation}>
            <div className={styles.tittle}>
                <h1>ToDo</h1>
            </div>
            <div>
                <div className={styles.hamburger} onClick={toggleHamburgerOpne}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>

           <ul style={{ display: hamburgerOpen ? 'flex' : 'none' }}>
                <li><a href="https://www.google.com">Home</a></li>
                <li><a href="/">Contatos</a></li>
                <li><a href="/">Suporte</a></li>
            </ul> 
        </div>
    )
}

export default Nav;