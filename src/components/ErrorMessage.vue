<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<template>
  <p class="error-message">{{ msg || 'Error' }}</p>
</template>

<style scoped>

.error-message {
  color: var(--base-red);
}

</style>
