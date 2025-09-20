const url: string = "https://tasklist-uih7.onrender.com";

// Define a interface para os atributos da tarefa
interface TaskAttributes {
  titulo: string;
  descricao?: string;
  status?: string;
}

class TaskManager implements TaskAttributes {
  // Encapsula os atributos da tarefa
  titulo: string;
  descricao?: string;
  status?: string;
  static responseError: any;

  //============================================================================
  // Construtor da classe TaskManager
  constructor(titulo: string, descricao?: string, status?: string) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
  }

  //============================================================================
  // Método auxiliar para fazer requisições HTTP
  static async request(endpoint: string, options: RequestInit = {}) {
    
    // Adiciona o token de autenticação no cabeçalho, se disponível
    const config = {
      ...options,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }

    try {

      // Realiza a requisição HTTP
      const response = await fetch(`${url}${endpoint}`, config);

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro na requisição.");
      }

      // Retorna os dados da resposta
      return { success: true, data: await response.json() };

    } catch (error) {
      console.error(`Erro de servidor:`, error);
      throw error;
    }
  }
  //============================================================================
  // Métodos estáticos para operações CRUD
  // Cria uma nova tarefa
  //============================================================================
  static async task(titulo: string, descricao: string) {
    const body = JSON.stringify({ titulo, descricao });
    return this.request('/tasks/createTask', {
      method: "POST",
      body
    });
  }
//============================================================================
  // Obtém todas as tarefas
//============================================================================
  static async getTask() {
    return this.request('/tasks/getTasks', {
      method: "GET",
    });
  }
  //============================================================================
  // Atualiza uma tarefa existente
  //============================================================================
  static async updateTask(id: number, titulo?: string, descricao?: string, status?: string) {
    const body = JSON.stringify({ id, titulo, descricao, status });
    return this.request('/tasks/updateTask', {
      method: "PUT",
      body
    });
  }
  //============================================================================
  // Deleta uma tarefa existente
  //============================================================================
  static async deleteTask(id: number) {
    const body = JSON.stringify({ id });
    return this.request('/tasks/deleteTask', {
      method: "DELETE",
      body
    });
  }
}

export default TaskManager;
