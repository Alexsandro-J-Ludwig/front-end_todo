const signup = async(username: string, email: string, password: string) => {
    const url:string = "https://tasklist-production-d15b.up.railway.app"

    try {
        const response = await fetch(`${url}/user/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            return `Erro na requisição: ${response.status}`;
        }

        const data = await response.json();
        const token:string = data.token; // acessa o token dentro do objeto

        console.log(data);
        

        if(data.msg){
            alert("Usuario ja existe")
        }
        localStorage.setItem("token", token);
    } catch (error) {
        console.error(`Erro de requisição: ${error}`);
        return "Erro na requisição";
    }
};

export default signup;
