<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo-star-antigo.png'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { registerSchema } from '@/validation/registerSchema'

const router = useRouter()
const loading = ref(false)

const { handleSubmit, errors, defineField, resetForm } = useForm({
  validationSchema: toTypedSchema(registerSchema),
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
})

const [name, nameAttrs] = defineField('name', {
  validateOnModelUpdate: true 
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true 
})
const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true 
})

const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword', {
  validateOnModelUpdate: true 
})

const handleRegister = handleSubmit(async (values) => {
  loading.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Sucesso:', values)
    resetForm()
  } finally {
    loading.value = false
  }
})
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

        <form class="space-y-4" @submit.prevent="handleRegister">

          <!-- Nome -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Nome</label>
            <input
              v-model="name"
              v-bind="nameAttrs"
              type="text"
              placeholder="Seu nome completo"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
            <p class="text-sm text-red-600">
                {{ errors.name }}
            </p>
          </div>

          <!-- Email -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Email</label>
            <input
              v-model="email"
              v-bind="emailAttrs"
              type="email"
              placeholder="seuemail@email.com"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
            <p class="text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <!-- Senha -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Senha</label>
            <input
              v-model="password"
              v-bind="passwordAttrs"
              type="password"
              placeholder="********"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />
            <p class="text-sm text-red-600 mt-1">
              {{ errors.password }}
            </p>
          </div>

          <!-- Confirmar -->
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Confirmar Senha</label>
            <input
              v-model="confirmPassword"
              v-bind="confirmPasswordAttrs"
              type="password"
              placeholder="********"
              class="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />

            <p class="text-sm text-red-600 mt-1">
              {{ errors.confirmPassword }}
            </p>
          </div>

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