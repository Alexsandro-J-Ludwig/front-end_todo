import styles from './Footer.module.css'

function Footer(){
    const year: number = new Date().getFullYear()
    return (
        <footer className={styles.container}>
            <p className={styles.footerText}>&copy; Alexsandro {year}</p>
        </footer>
    )
}

export default Footer;