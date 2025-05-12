<template>
  <v-navigation-drawer 
    app 
    :model-value="isOpen" 
    @update:model-value="$emit('update:isOpen', $event)"
  >
    <v-list density="compact" nav>
      <v-list-subheader>MENU</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.path" 
        @click="handleNavigation" 
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

// Definir las props y emits
defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['update:isOpen'])

// Array de elementos de navegación
const items = ref([
  { text: 'Inicio', icon: 'mdi-home', path: '/' },
  { text: 'Dispositivos', icon: 'mdi-developer-board', path: '/devices' }
])
 const handleNavigation = () => {
    // Aquí puedes añadir lógica si es necesario
    // cerrar el drawer al hacer clic
  }

</script>

<style scoped>
/* Estilos si son necesarios */
</style>
