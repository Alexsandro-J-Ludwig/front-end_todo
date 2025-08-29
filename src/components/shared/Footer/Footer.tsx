function Footer(){
    const year: number = new Date().getFullYear()
    return (
        <footer>
            <p>&copy; Alexsandro {year}</p>
        </footer>
    )
}

export default Footer;