<script setup>
import { ref } from 'vue'
import logoBgDark from '../assets/logo_vertical_bg_dark.svg'
import logoBgWhite from '../assets/logo_horizontal_bg_white.svg'
import { useRouter } from 'vue-router'
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

  <div class="flex h-screen flex-col md:flex-row min-h-screen font-sans">

    <!-- LEFT -->
    <aside class="hidden md:flex flex-1 relative overflow-hidden bg-white">

      <svg viewBox="0 0 1080 1080" preserveAspectRatio="none" class="absolute inset-0 w-full h-full object-cover">
        <path d="M0 0H1012.06C1239.52 336 805.478 728 1012.06 1080H0V0Z" fill="url(#paint0_linear_4_655)" />
        <defs>
          <linearGradient id="paint0_linear_4_655" x1="1012.06" y1="1080" x2="47.3168" y2="-40.7312"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#CF5768" />
            <stop offset="1" stop-color="#880D1E" />
          </linearGradient>
        </defs>
      </svg>

      <div class="relative z-10 flex flex-col justify-center items-start h-full px-20 text-white">
        <div class="flex flex-col items-start gap-6 max-w-md">

          <img :src="logoBgDark" alt="logo" class="w-[260px]" />
          <div>
            <h2 class="text-3xl font-semibold mb-2">
              Comece sua jornada literária
            </h2>

            <p class="leading-relaxed text-sm opacity-90">
              Crie sua conta para avaliar livros, escrever resenhas
              e compartilhar suas leituras favoritas.
            </p>
          </div>
        </div>
      </div>
    </aside>

    <!-- RIGHT -->
    <main class="flex-1 flex justify-center items-center bg-white">

      <div class="flex flex-col items-center w-full">

        <div class="mb-6 md:hidden">
          <img :src="logoBgWhite" alt="Logo do StaReview" class="w-[180px]" />
        </div>

        <div class="pt-10 pb-10 px-6 w-full max-w-[350px] rounded-2xl shadow-xl border border-red-400">

          <h2 class="flex text-xl font-semibold font-karla text-[#292929] justify-center mb-6">
            Criar Conta
          </h2>

          <form class="space-y-4" @submit.prevent="handleRegister" novalidate>

            <div class="flex flex-col">
              <label for="name" class="text-sm mb-1 font-inconsolata text-gray-700 pl-3">Nome</label>
              <input id="name" v-model="name" v-bind="nameAttrs" type="text" placeholder="Seu nome completo"
                class="p-3 rounded-[25px] border bg-green-50 py-2 focus:outline-none" />
              
                <p class="text-sm text-red-600 mt-2">
                {{ errors.name }}
              </p>
            </div>

            <div class="flex flex-col">
              <label for="email" class="text-sm mb-1 font-inconsolata text-gray-700 pl-3">Email</label>
              <input id="email" v-model="email" v-bind="emailAttrs" type="email" placeholder="seuemail@email.com"
                class="p-3 rounded-[25px] border bg-green-50 py-2 focus:outline-none" />
              <p class="text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>

            <div class="flex flex-col">
              <label for="password" class="text-sm mb-1 font-inconsolata text-gray-700 pl-3">Senha</label>
              <input id="password" v-model="password" v-bind="passwordAttrs" type="password" placeholder="********"
                class="p-3 rounded-[25px] border bg-green-50 py-2 focus:outline-none" />
              <p class="text-sm text-red-600 mt-1">
                {{ errors.password }}
              </p>
            </div>

            <div class="flex flex-col">
              <label for="confirmPassword" class="text-sm mb-1 font-inconsolata text-gray-700 pl-3">Confirmar Senha</label>
              <input id="confirmPassword" v-model="confirmPassword" v-bind="confirmPasswordAttrs" type="password"
                placeholder="********"
                class="p-3 rounded-[25px] border bg-green-50 py-2 focus:outline-none" />

              <p class="text-sm text-red-600 mt-1">
                {{ errors.confirmPassword }}
              </p>
            </div>

            <button type="submit" :disabled="loading"
              class="w-full flex items-center justify-center bg-[#9BE9B2] text-[#292929] py-2 rounded-[25px] font-semibold hover:opacity-90 transition disabled:opacity-50">
              {{ loading ? 'Cadastrando...' : 'Criar Conta' }}
            </button>

            <p class="text-center text-sm mt-4">
              Já possui conta?
              <router-link to="/login" class="text-[#880D1E] font-semibold">
                Entrar
              </router-link>
            </p>

          </form>
        </div>
      </div>
    </main>
  </div>
</template>