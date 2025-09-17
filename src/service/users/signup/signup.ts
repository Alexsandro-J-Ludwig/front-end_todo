interface SignupAttribute {
  username: string;
  email: string;
  password: string;
}

class Signup implements SignupAttribute {
  public username: string;
  public email: string;
  public password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static async signup(username: string, email: string, password: string) {
    const url: string = "https://tasklist-production-d15b.up.railway.app";

    try {
      const response = await fetch(`${url}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        return `Erro na requisição: ${response.status}`;
      }

      const data = await response.json();
      const token: string = data.token;

      console.log(data);

      if (data.msg) {
        alert("Usuario ja existe");
      }
      localStorage.setItem("token", token);

      return true;
    } catch (error) {
      console.error(`Erro de requisição: ${error}`);
      return "Erro na requisição";
    }
  }
}

export default Signup;
