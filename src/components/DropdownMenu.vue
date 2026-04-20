<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const options = [
  { label: 'Meu perfil', href: '#' },
  { label: 'Configurações', href: '#' },
  { label: 'Sair', href: '#' }
]

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}

/* função que detecta clique fora */
function handleClickOutside(event: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <!-- 👇 MUITO IMPORTANTE: ref aqui -->
  <div ref="menuRef" class="relative">
    
    <!-- Botão -->
    <button
      type="button"
      @click="toggleMenu"
      class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7 0 .552.448 1 1 1h12c.552 0 1-.448 1-1 0-3.866-3.134-7-7-7z"/>
      </svg>
    </button>

    <!-- Menu -->
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-lg z-20"
    >
      <div class="py-2">
        <a
          v-for="option in options"
          :key="option.label"
          :href="option.href"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          @click="closeMenu"
        >
          {{ option.label }}
        </a>
      </div>
    </div>

  </div>
</template>