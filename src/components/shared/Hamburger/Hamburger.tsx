import styles from "./Hamburger.module.css"

function Hamburger({isOpen}:HamburgerProps) {
    return (
        <>
            <div className={`${styles.hamburger} ${isOpen ? 'open' : ''}`}>
                <div className={`${styles.burger} ${styles.burger1}`}></div>
                <div className={`${styles.burger} ${styles.burger2}`}></div>
                <div className={`${styles.burger} ${styles.burger3}`}></div>
            </div>
        </>
    )
}

type HamburgerProps = {
    isOpen: boolean;
}

export default Hamburger;