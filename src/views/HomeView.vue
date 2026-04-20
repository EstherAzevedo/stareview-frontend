<script setup lang="ts">
import Navbar from '../components/Navbar.vue'

const reviews = [
  {
    id: 1,
    title: 'Cartas de um diabo a seu aprendiz',
    author: 'C.S. Lewis',
    user: 'EstherAzevedo',
    content: 'Uma leitura profunda e cheia de reflexões...',
    stars: 4,
    comments: 8
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    user: 'Maria',
    content: 'Distopia impactante que faz pensar...',
    stars: 5,
    comments: 12
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    
    <Navbar />

    <!-- Conteúdo principal -->
    <main class="max-w-7xl mx-auto px-6 py-10">
      
      <section>
        <h2 class="text-2xl font-bold mb-6">
          📚 Resenhas recentes
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          
          <div
            v-for="review in reviews"
            :key="review.id"
            class="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
          >
            <div class="flex gap-4">
              
              <!-- Capa -->
              <div class="w-20 h-28 bg-gray-300 rounded"></div>

              <!-- Conteúdo -->
              <div class="flex-1">
                <h3 class="font-bold text-lg">
                  {{ review.title }}
                </h3>

                <p class="text-sm text-gray-500">
                  por {{ review.user }}
                </p>

                <p class="text-sm text-gray-600 mt-2 line-clamp-3">
                  {{ review.content }}
                </p>

                <!-- Interações -->
                <div class="flex gap-4 mt-3 text-sm text-gray-600">
                  <span>⭐ {{ review.stars }}</span>
                  <span>💬 {{ review.comments }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  </div>
</template>