<template>
  <div class="convert-image">
    <v-container>
      <v-stepper ref="stepper" v-model="step" :items="steps" flat elevation="0">
        <!-- eslint-disable-next-line vue/valid-v-slot -->
        <template #item.1>
          <DragFileUpload @upload="onUpload" />
        </template>

        <template #item.2>
          <FileFormatChanger v-model="format" />
        </template>

        <template #item.3>
          <ConvertProcessing />
        </template>
      </v-stepper>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const steps = ["Загрузка файла", "Выбор формата", "Конвертация", "Скачивание"];
const step = ref(0);
const stepper = useTemplateRef("stepper");

const images = ref<File[]>([]);
const onUpload = (files: File[]) => {
  images.value = files;

  stepper.value?.next();
};

const format = ref("");
</script>

<style scoped lang="scss">
.convert-image {
  &:deep(.v-stepper-header) {
    box-shadow: none;
  }
}
</style>
