const signup = async(username: string, email: string, password: string) => {
    try {
        if(!username || !email || !password){
            return "Nenhum campo pode estar vazio";
        }

        const response = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            return `Erro na requisição: ${response.status}`;
        }

        const data = await response.json();
        const token: string = data.token; // acessa o token dentro do objeto

        localStorage.setItem("token", token);

        return "Cadastro realizado com sucesso!";
    } catch (error) {
        console.error(`Erro de requisição: ${error}`);
        return "Erro na requisição";
    }
};

export default signup;
