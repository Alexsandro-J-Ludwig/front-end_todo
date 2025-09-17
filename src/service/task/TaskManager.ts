interface TaskAttributes {
  titulo: string;
  descricao?: string;
}

class TaskManager implements TaskAttributes {
  titulo: string;
  descricao?: string;

  constructor(titulo: string, descricao?: string) {
    this.titulo = titulo;
    this.descricao = descricao;
  }

  static async task(titulo: string, descricao: string) {
    const url: string = "https://tasklist-production-d15b.up.railway.app";

    try {
      const response = await fetch(`${url}/tasks/createTask`, {
        method: "POST",
        headers: {
          Authorization: `baerer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, descricao }),
      });

      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro na requisição.");
      };

      const data = await response.json();
      return { success: true, data };

    } catch (error) {
      console.error(`Erro de servidor:`, error);
      throw error; 
    }
  }
}

export default TaskManager;