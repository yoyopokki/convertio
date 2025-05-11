<template>
  <v-app>
    <v-app-bar :elevation="0" rounded>
      <template v-slot:prepend></template>
    </v-app-bar>

    <main>
      <slot />
    </main>
  </v-app>
</template>
