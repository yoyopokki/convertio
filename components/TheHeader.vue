<template>
  <v-app-bar :elevation="0" class="header">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="d-flex align-center ga-5">
          <TheLogotype />

          <HeaderMenu />
        </v-col>

        <v-col cols="auto">
          <AuthButton />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
