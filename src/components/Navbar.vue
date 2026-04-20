<script setup lang="ts">
import { ref } from 'vue'
import logoBgDark from '../assets/logo_horizontal_bg_dark.svg'
import DropdownMenu from './DropdownMenu.vue'

const activeTab = ref('GERAL')
const search = ref('')

const tabs = [
  'GERAL',
  'FÓRUNS',
  'NOVA RESENHA',
  'PERFIL',
  'LISTA DE METAS'
]
</script>


<template>
  <header class="w-full bg-[#880D1E] shadow-sm border-b">
    <nav class="max-w-7xl mx-auto flex items-center justify-between p-4">

      <!-- Logo -->
      <div class="flex items-center gap-2 font-bold text-xl">

        <img :src="logoBgDark" alt="logo" class="w-[260px]" />
      </div>

      <!-- Ações -->
      <div class="flex items-center gap-3">
        <div class="flex items-center bg-[#A4161A] px-4 py-2 rounded-full w-[400px] border">
          <input v-model="search" type="text" placeholder="Busque por livros, perfis, resenhas..."
            class="bg-transparent outline-none text-white placeholder-white w-full text-sm" />

          <!-- Ícone -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" viewBox="0 0 24 24"
            fill="currentColor">
            <path
              d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </div>
        <DropdownMenu />
      </div>
    </nav>
  </header>

  <!-- MENU SECUNDÁRIO -->
  <div class="w-full bg-gray-100 py-4">
    <div class="max-w-4xl mx-auto">

      <div class="flex justify-between items-center border border-red-300 rounded-full px-2 py-1 bg-white">

        <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
          class="px-4 py-2 rounded-full text-sm font-medium transition" :class="activeTab === tab
            ? 'bg-[#880D1E] text-white'
            : 'text-[#880D1E] hover:bg-red-100'">
          {{ tab }}
        </button>

      </div>

    </div>
  </div>
</template>