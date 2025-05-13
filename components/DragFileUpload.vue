<template>
  <div
    ref="drag-file-upload"
    class="drag-file-upload border-md border-dashed rounded pa-16 d-flex flex-column align-center justify-center"
    :class="{ 'drag-file-upload_active': dragActive }"
  >
    <div class="drag-file-upload__title">Переместите сюда файл</div>

    <div class="drag-file-upload__divider mt-5 mb-5">
      <v-divider>или</v-divider>
    </div>

    <v-btn>Выберите файл</v-btn>
  </div>
</template>

<script setup lang="ts">
const dragFileUploadElement = useTemplateRef("drag-file-upload");

const dragActive = ref(false);

onMounted(() => {
  dragFileUploadElement.value?.addEventListener("dragenter", (event) => {
    event.preventDefault();

    dragActive.value = true;
  });

  dragFileUploadElement.value?.addEventListener("dragleave", (event) => {
    event.preventDefault();

    dragActive.value = false;
  });

  dragFileUploadElement.value?.addEventListener("drop", (event) => {
    event.preventDefault();
  });
});
</script>

<style scoped lang="scss">
.drag-file-upload {
  & &__divider {
    width: 50%;
  }

  &_active {
    background-color: rgba(var(--v-theme-hover));
  }
}
</style>
