<script setup>
import MainBody from "./components/layout/MainBody.vue";
import FootBar from "./components/layout/FootBar.vue";
import NavigationDrawer from "./components/layout/NavigationDrawer.vue";
import cfg from "./configs/index.js";
import {onMounted, ref} from "vue";

document.title = cfg().info.title;

const ScrollTop = ref(0)

onMounted(()=> window.addEventListener('scroll', function() { ScrollTop.value = document.documentElement.scrollTop || document.body.scrollTop}))

function upToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
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
    <v-btn class="up-to-top" size="40" color="primary" v-if="ScrollTop >= 100" @click="upToTop"><v-icon size="20">mdi-arrow-up</v-icon></v-btn>
  </v-app>
</template>

<style scoped>
.up-to-top{
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
}
</style>
<script>

</script>