<script setup>
import {inject, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import cfg from "../../configs/index.js";
import useIndex from "../../pinia/index.js";

const lazy = ref(cfg().lazy)
const axios = inject('axios')
const router = useRouter()
const article = ref( {
    title: "人权宣言",
    content: '',
    tags: ["测试", "测试", "测试"],
    preview: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    date: "2021-10-10"
})
const index = ref()

const fid = router.currentRoute.value.params.id
onMounted(async () => {
  const i = useIndex()
  if(!i.index){
    await i.get()
  }
  index.value = i.index
  let a = index.value.filter((item) => {
    return item.permalink === fid
  })
  if (a.length > 0){
    a = a[0]
    article.value = a
    axios.get('/articles/post/' + a.id + '.cat').then(
        res => {
          article.value.content = res.data
        }
    )
  } else {
    article.value.content = '404'
  }
  document.title = article.value.title
})
</script>

<template>
  <div class="a-card">
      <v-card
          class="mx-auto"
          max-width="960px"
          min-width="300px"
          color="primary"
      >
        <v-img
            class="align-end text-white art-bg"
            :lazy-src="lazy"
            :src="article.preview"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
        >
          <v-card-title style="font-size: 30px">
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle style="font-size: 18px;">
            {{ new Date(article.date).toISOString().replace(/T|\.000Z/g, ' ') }}
          </v-card-subtitle>
        </v-img>

        <v-card-text>
          <div class="article" v-html="article.content">
          </div>
        </v-card-text>
      </v-card>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .art-bg{
    height: 200px;
  }
  .a-card{

  }
}
@media screen and (min-width: 600px) {
  .art-bg{
    height: 300px;
  }
  .a-card{
    margin: 25px 1% 50px;
  }
}
p{
  margin-top: 20px;
}
.article{
  font-size: 17px;
  margin: 10px;
}
.article{
  padding: 1%;
}
.article /deep/ p{
  text-indent: 2em;
}
.article /deep/ a{
  text-decoration: none;
  color: #4fc3f7;
}
.article /deep/ img{
  width: 100%;
}
.article /deep/ li{
  margin-top: 20px;
}
.article /deep/ ul{
  padding-left: 20px;
}
.article /deep/ ul p{
  text-indent: 0
}
</style>