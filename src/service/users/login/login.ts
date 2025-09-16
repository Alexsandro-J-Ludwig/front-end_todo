const login = async(email:string, password:string) => {
    try {
        if(!email || !password){
            return "Email ou senha inválidos"
        };

        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if(!response.ok){
            return console.error("Erro de requisição");
        }

        const user = await response.json();
        const token:string = user;

        localStorage.setItem("token", token);
    } catch(err){
        console.error("Erro de servidor", err);
    }
}

export default login;