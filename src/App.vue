<script setup>
import MainBody from "./components/layout/MainBody.vue";
import FootBar from "./components/layout/FootBar.vue";
import NavigationDrawer from "./components/layout/NavigationDrawer.vue";
</script>

<template>
  <v-app>
    <v-layout>
    <NavigationDrawer></NavigationDrawer>

      <v-main>
        <MainBody></MainBody>
      </v-main>
      <FootBar></FootBar>
    </v-layout>
  </v-app>
</template>

<style scoped>
</style>
