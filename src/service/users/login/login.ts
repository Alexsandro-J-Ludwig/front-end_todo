interface LoginAttributes {
  email: string;
  password: string;
}

class Login implements LoginAttributes {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  static async login(email: string, password: string) {
    const url: string = "https://tasklist-uih7.onrender.com";

    try {
      const response = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return console.error("Erro de requisição");
      }

      const data = await response.json();
      const token: string = data.token;

      localStorage.setItem("token", token);

      return "true";
    } catch (err) {
      console.error(`Erro de servidor: ${err}`);
    }
  }
}

export default Login;
