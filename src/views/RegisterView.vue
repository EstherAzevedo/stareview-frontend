<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo-star.png'

const router = useRouter()


const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')

const handleSubmit = async () => {
  error.value = ''

  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Preencha todos os campos'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'As senhas não coincidem'
    return
  }

  try {
    loading.value = true

    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Dados enviados:', {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })

    alert('Cadastro realizado com sucesso!')

    router.push('/login')

    //limpar campos
    name.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''  

  } catch (err) {
    error.value = 'Erro ao cadastrar'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  
  <div class="flex h-screen font-sans">

    <!-- LEFT -->
    <div class="flex-1 bg-gradient-to-br from-[#6B1E3D] to-[#7E57C2] text-white flex flex-col justify-center px-20">
      
      <div class="flex items-center gap-4 mb-10">
        <img :src="logo" alt="logo" class="w-14" />
        <h1 class="text-2xl font-semibold">StaReview</h1>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">
          Comece sua jornada literária ✨
        </h2>
        <p class="max-w-md leading-relaxed text-sm opacity-90">
          Crie sua conta para avaliar livros, escrever resenhas
          e compartilhar suas leituras favoritas.
        </p>
      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex-1 flex justify-center items-center bg-gray-100">

      <div class="bg-white p-10 w-[420px] rounded-2xl shadow-xl">

        <h2 class="text-xl font-semibold text-[#6B1E3D] mb-6">
          Criar Conta
        </h2>

        <form class="space-y-4" @submit.prevent="handleSubmit">

          <!-- Nome -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Nome</label>
            <input
              v-model="name"
              type="text"
              placeholder="Seu nome completo"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="seuemail@email.com"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
          </div>

          <!-- Senha -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Senha</label>
            <input
              v-model="password"
              type="password"
              placeholder="********"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
          </div>

          <!-- Confirmar -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Confirmar Senha</label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="********"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
          </div>

          <!-- ERRO -->
          <p v-if="error" class="text-sm text-red-600">
            {{ error }}
          </p>

          <!-- BOTÃO -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#6B1E3D] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {{ loading ? 'Cadastrando...' : 'Criar Conta' }}
          </button>

          <!-- LINK -->
          <p class="text-center text-sm mt-4">
            Já possui conta?
            <router-link to="/login" class="text-[#6B1E3D] font-semibold">
              Entrar
            </router-link>
          </p>

        </form>
      </div>

    </div>

  </div>
</template>