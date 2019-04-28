<template>
  <div>
    <p class="card">
      {{text}}123
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  padding: 10px; color: red;
}
</style>
