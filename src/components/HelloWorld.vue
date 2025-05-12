<template>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="344"
  >
    <v-card-item>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>

    <v-text-field v-model="title" label="Enter title"></v-text-field>
  </v-card>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const title = ref('Homeview')

    return {
      title
    }
  }
}
</script>
