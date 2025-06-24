<template>
  <div
    ref="drag-file-upload"
    class="drag-file-upload border-md border-dashed rounded pa-16 d-flex flex-column align-center justify-center"
    :class="{ 'drag-file-upload_active': isOverDropZone }"
  >
    <div class="drag-file-upload__title">Переместите сюда файл</div>

    <div class="drag-file-upload__divider mt-5 mb-5">
      <v-divider>или</v-divider>
    </div>

    <v-btn>Выберите файл</v-btn>
  </div>
</template>

<script setup lang="ts">
import { useDropZone } from "@vueuse/core";
import { DataTypes } from "~/types/data-types";

const dataTypes: Record<DataTypes, string[]> = {
  [DataTypes.IMAGE]: ["image/jpeg", "image/png"],
  [DataTypes.MUSIC]: [],
};

const props = withDefaults(
  defineProps<{
    for?: DataTypes;
  }>(),
  { for: DataTypes.IMAGE },
);
const emit = defineEmits<{
  upload: [files: File[]];
}>();

const dragFileUploadElement = useTemplateRef("drag-file-upload");

const onDrop = (files: File[] | null) => {
  emit("upload", files ?? []);
};

const { isOverDropZone } = useDropZone(dragFileUploadElement, {
  onDrop,
  dataTypes: dataTypes[props.for],
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
