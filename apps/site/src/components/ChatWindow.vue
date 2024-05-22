<script setup lang="ts">
import { ref } from 'vue';

const messages = ref([
  { id: 1, sender: 'Alice', content: 'Olá!', timestamp: '10:30' },
  { id: 2, sender: 'Você', content: 'Oi, tudo bem?', timestamp: '10:32' },
  // Adicione mais mensagens conforme necessário
]);

const newMessage = ref('');

function sendMessage() {
  if (newMessage.value.trim() !== '') {
    messages.value.push({
      id: messages.value.length + 1,
      sender: 'Você',
      content: newMessage.value,
      timestamp: new Date().toLocaleTimeString(),
    });
    newMessage.value = '';
  }
}
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 overflow-y-auto p-4">
      <div v-for="message in messages" :key="message.id" class="mb-4">
        <div :class="['p-2 rounded-lg', message.sender === 'Você' ? 'bg-green-500 self-end' : 'bg-gray-600 self-start']">
          <div class="text-sm">{{ message.content }}</div>
          <div class="text-xs text-gray-400">{{ message.timestamp }}</div>
        </div>
      </div>
    </div>
    <div class="p-4 bg-input-bg flex items-center">
      <i class="fa-regular fa-face-grin text-gray-400"></i>
      <i class="fa-sharp fa-solid fa-paperclip text-gray-400 mx-2"></i>
      <input
        type="text"
        v-model="newMessage"
        @keyup.enter="sendMessage"
        class="w-full p-2 border border-gray-600 rounded-lg bg-input-bg text-white placeholder-gray-400"
        placeholder="Digite uma mensagem"
      />
      <i class="fa-solid fa-microphone text-gray-400 ml-2"></i>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
