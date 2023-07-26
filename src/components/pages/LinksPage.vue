<script setup>
import cfg from "../../configs/index.js";
import link from '../../configs/links.json'
import {ref} from "vue";

const lazy = ref(cfg().lazy)
const info = ref(cfg().info)
const links = ref(link)
</script>

<template>
  <div class="f-list">
    <v-card
        class="mx-auto"
        width="100%"
        min-width="300px"
        min-height="60vh"
        color="primary">
      <v-card-title
          style="
          font-size: 32px;
          margin-left: 10px;
          display: flex;
          height: 64px;
          align-items: center;"
      >
        <v-icon color="white">mdi-link-variant</v-icon>友人帐
      </v-card-title>
      <v-divider></v-divider>
      <v-card-subtitle class="text-wrap" style="font-size: 20px">
        <div style="margin: 25px 10px 25px;">
          排名不分先后<br>
          申请格式：包含链接，名称，头像，简介即可。<br>
          如需修改友链信息请联系<a :href="'mailto:' + info.mail" style="color: #00b0ff">{{ info.mail }}</a>～
        </div>
        <v-divider></v-divider>
        <div style="margin: 25px 10px 25px;">
          <span>昵称：</span><span>{{ info.name }}</span><br>
          <span>站名：</span><span>{{ info.title }}</span><br>
          <span>logo：</span><span>{{ info.logo }}</span><br>
          <span>简介：</span><span>{{ info.sign }}</span>
        </div>
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text style="height: auto">
        <div class="friends">
          <div class="friends-item" v-for="l in links" :key="l">
            <v-hover>
              <template v-slot:default="{ isHovering , props}">
                <v-card v-bind="props" :color="isHovering? 'info': 'primary'" elevation="0" >
                  <a :href="l.url">
                    <div class="f-card">
                      <div class="logo">
                        <v-avatar size="64" class="rounded-circle" style="border: 1px solid #757575;">
                          <v-img
                              :src="l.logo"
                              :lazy-src="lazy"
                              aspect-ratio="1"
                              contain
                          ></v-img>
                        </v-avatar>
                      </div>
                      <div class="name">
                        <v-card-title style="font-size: 25px">
                          {{ l.name }}
                        </v-card-title>
                        <v-card-subtitle style="font-size: 18px; " class="text-wrap">
                    <span>
                      {{ l.sign }}
                    </span>
                        </v-card-subtitle>
                      </div>
                    </div>
                  </a>
                </v-card>
              </template>
            </v-hover>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.friends{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.friends-item{
  margin: 2%;
}
.f-list{
  margin: 25px auto 50px;
}
.f-card{
  display: flex;
  margin: 15px;
}
.name{
  margin-top: -10px;
}
@media screen and (max-width: 600px) {
  .friends-item{
    width: 100%;
  }
  .f-list{
    width: 100vw;
  }
}
@media screen and (min-width: 600px) {
  .friends-item{
    width: 45%;
  }
  .f-list{
    max-width: 960px;
    min-width: 600px;
  }
}
a{
  text-decoration: none;
  color: white;
}
</style>