<template>
    <v-container fluid>
      <v-row>
        <!-- Modificamos v-col para que sea responsivo -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <!-- Aquí usamos el componente -->
          <WelcomeCard />
        </v-col>
        
        <!-- Puedes añadir más columnas aquí con la misma lógica responsiva -->
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  // importamos el componente
  import WelcomeCard from '@/components/WelcomeCard.vue'
  </script>
