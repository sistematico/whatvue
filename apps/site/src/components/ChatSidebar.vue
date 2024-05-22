<script setup lang="ts">
import { ref } from 'vue';

const chats = ref([
  { id: 1, name: 'Alice', lastMessage: 'Olá!', timestamp: '10:30' },
  { id: 2, name: 'Bob', lastMessage: 'Como vai?', timestamp: '09:45' },
  // Adicione mais conversas conforme necessário
]);
</script>

<template>
  <div class="h-full overflow-y-auto p-4">
    <div v-for="chat in chats" :key="chat.id" class="p-4 border-b border-dark-border cursor-pointer hover:bg-hover-gray">
      <div class="text-lg font-semibold">{{ chat.name }}</div>
      <div class="text-sm text-gray-400">{{ chat.lastMessage }}</div>
      <div class="text-xs text-gray-600">{{ chat.timestamp }}</div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
