<script setup>
import { ref } from 'vue'
import logo from '../assets/logo-star.png'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { loginSchema } from '@/validation/loginSchema'

const loading = ref(false)

const { handleSubmit, errors, defineField, resetForm } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: '',
    password: ''
  }
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true 
})
const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true 
})

const handleLogin = handleSubmit(async (values) => {
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
          Bem-vindo de volta ✨
        </h2>
        <p class="max-w-md leading-relaxed text-sm opacity-90">
          Entre na sua conta e continue explorando, avaliando
          e compartilhando suas leituras favoritas.
        </p>
      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex-1 flex justify-center items-center bg-gray-100">

      <div class="bg-white p-10 w-[420px] rounded-2xl shadow-xl border border-gray-100">

        <h2 class="text-xl font-semibold text-[#6B1E3D] mb-6">
          Entrar
        </h2>

        <form class="space-y-4" @submit.prevent="handleLogin">
          <div class="flex flex-col">
            <label class="text-sm mb-1 text-gray-700">Email</label>
            <!-- Email -->
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
              class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7E57C2]"
            />

            <p class="text-sm text-red-600 mt-1">
              {{ errors.password }}
            </p>
          </div>

          <!-- BOTÃO -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#6B1E3D] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {{ loading ? 'Entrando...' : 'Entrar' }}
          </button>

          <!-- LINK -->
          <p class="text-center text-sm mt-4">
            Não possui conta?
            <router-link to="/" class="text-[#6B1E3D] font-semibold">
              Criar conta
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>