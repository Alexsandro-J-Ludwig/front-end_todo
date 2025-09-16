const login = async(email:string, password:string) => {
    const url:string = "https://tasklist-production-d15b.up.railway.app"

    try {
        const response = await fetch(`${url}/user/login`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if(!response.ok){
            return console.error("Erro de requisição");
        }

        const data = await response.json();
        const token: string = data.token;

        localStorage.setItem("token", token);   

        return "logado"
    } catch(err){
        console.error(`Erro de servidor: ${err}`);
    }
}

export default login;