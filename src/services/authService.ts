import type { RegisterDTO, LoginDTO } from '../types/User'

export const authService = {
  async register(data: RegisterDTO) {
    console.log('Cadastro enviado:', data)

    // return axios.post('/register', data)
  },

  async login(data: LoginDTO) {
    console.log('Login enviado:', data)

    // return axios.post('/login', data)
  }
}