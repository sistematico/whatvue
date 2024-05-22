<script setup lang="ts">
import ChatSidebar from './components/ChatSidebar.vue'
import ChatWindow from './components/ChatWindow.vue'
</script>

<template>
  <div class="flex h-screen w-screen bg-dark-gray text-white">
    <ChatSidebar class="w-1/3 bg-sidebar-gray" />
    <ChatWindow class="flex-1 bg-dark-gray" />
  </div>
</template>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
