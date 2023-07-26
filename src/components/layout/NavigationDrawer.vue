<script setup>
import {ref} from "vue";
import cfg from "../../configs/index.js";

const c = cfg()
const drawer = ref(false)
const lazy = ref(c.lazy)
const info = ref(c.info)

</script>

<template>
    <v-app-bar elevation="0" color="primary" order="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" elevation="0"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <div style="display: flex; align-items: center">
          <div style="margin-bottom: 5px; padding-left: 10px;">{{ info.title }}</div>
        </div>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
        permanent="permanent"
        v-model="drawer"
        temporary="temporary"
        app
        color="primary"
    >
      <template v-slot:prepend>
        <v-list>
        <div style="display: flex; align-items: center;flex-direction: column">
          <v-list-item>
            <div style="border-radius:1px"></div>
            <v-avatar size="100">
              <v-img :src="info.avatar" :lazy-src="lazy" alt=""></v-img>
            </v-avatar>
          </v-list-item>
          <router-link to="/about" style="color: #8cecec;text-decoration: none">
            <v-list-item :title="info.name">
            </v-list-item>
          </router-link>

          <v-list-item :title="info.title" :subtitle="info.sign" style="text-align: center">
          </v-list-item>
        </div>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav="">
        <v-list-item prepend-icon="mdi-home-city" title="首页" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document-outline" title="归档" to="/archives"></v-list-item>
        <v-list-item prepend-icon="mdi-link" title="友链" to="/links"></v-list-item>
        <v-list-item prepend-icon="mdi-account-outline" title="关于" to="/about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

</style>