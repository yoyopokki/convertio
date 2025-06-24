<template>
  <div class="file-format-changer ma-auto">
    <v-select
      v-model="model"
      :items="formats[props.for]"
      density="comfortable"
      label="Новый формат"
    ></v-select>
  </div>
</template>

<script setup lang="ts">
import { DataTypes } from "~/types/data-types";

const formats = {
  [DataTypes.IMAGE]: ["png", "jpg", "gif"],
  [DataTypes.MUSIC]: ["mp3", "wav", "flac"],
};

const props = withDefaults(
  defineProps<{
    for?: DataTypes;
  }>(),
  { for: DataTypes.IMAGE },
);

const model = defineModel<string>({ default: "" });
</script>

<style scoped lang="scss">
.file-format-changer {
  max-width: 600px;
}
</style>
