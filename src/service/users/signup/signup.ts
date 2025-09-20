const url: string = "https://tasklist-uih7.onrender.com";

//============================================================================
// Define a interface para os atributos de signup
//============================================================================
interface SignupAttribute {
  username: string;
  email: string;
  password: string;
}

class Signup implements SignupAttribute {
  //============================================================================
  // Encapsula os atributos de signup
  //============================================================================
  public username: string;
  public email: string;
  public password: string;

  //============================================================================
  // Construtor da classe Signup
  //============================================================================
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //============================================================================
  // Método para realizar o cadastro do usuário
  //============================================================================
  static async signup(username: string, email: string, password: string) {
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
