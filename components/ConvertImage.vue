<template>
  <div class="convert-image">
    <v-container>
      <v-stepper v-model="step" :items="steps" flat elevation="0">
        <template #item.1>
          Вкладка 1
        </template>
      </v-stepper>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const steps = ['Загрузка файла', 'Выбор формата', 'Конвертация', 'Скачивание'];
const step = ref(0);
</script>

<style scoped lang="scss">
.convert-image {
  &:deep(.v-stepper-header) {
    box-shadow: none;
  }
}
</style>
