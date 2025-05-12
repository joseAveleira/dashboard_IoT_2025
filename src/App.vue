<template>
  <v-app id="inspire">
    <!-- Usar el nuevo componente MyNavigation -->
    <MyNavigation :is-open="drawer" @update:is-open="drawer = $event" />

    <!-- App Bar: fija con app -->
    <v-app-bar app >
      <!-- Nav Icon con el icono de hamburguesa -->
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Mi Dashboard IoT</v-app-bar-title>
    </v-app-bar>

    <v-main class="bg-grey-lighten-5">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import MyNavigation from '@/components/MyNavigation.vue' // Importar el nuevo componente

const drawer = ref(true) // El estado del drawer permanece aquí
</script>
