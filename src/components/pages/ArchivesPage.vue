<script setup>
import {onMounted, ref} from "vue";
import useIndex from "../../pinia/index.js";

const i = useIndex()
const index = ref()
onMounted(async () => {
  if(!i.index){
    await i.get()
  }
  let data = i.index
  let y = []
  let all = []
  let t = 0
  for(let d_i in data){
    d_i = parseInt(d_i)
    const d = data[d_i]
    const date = new Date(d.date)
    if(t === 0){
      t = date.getFullYear()
    }
    const pa = () => {y.sort((a, b) => b.date - a.date);all.push({year: t,list: y});y = [];t = date.getFullYear()}
    const pb = () => {y.push({date: date.getMonth() + 1 + '-' + date.getDate(), title: d.title, link: d.permalink})}
    if(t !== date.getFullYear()){pa();pb()}else {pb();if(d_i === data.length - 1){pa()}}
  }
  index.value = all
})
</script>

<template>
  <div>
    <v-card :rounded="false" color="primary" max-width="960px" min-width="300px" class="mx-auto" style="margin-top: 2vh">
      <v-card-title style="height: 8vh; font-size: 35px;display: flex">
        <div style="display: flex; flex-direction: row; align-items: center">
          <div>
            <v-icon size="35px" color="white">mdi-archive</v-icon>
          </div>
          <div>归档</div>
        </div>
      </v-card-title>
      <v-divider></v-divider>
        <div>
          <v-timeline line-color="white" side="end" v-for="i in index" :key="i">
            <v-timeline-item size="32" dot-color="white">
                <span style="font-size: 32px">{{ i.year }}</span>
            </v-timeline-item>
              <v-timeline-item size="16" dot-color="white" v-for="l in i.list" :key="l">
                <div class="tl">
                  <div style="font-size: 20px; margin-right: 10px; min-width: 50px">{{ l.date }} </div>
                  <v-btn :to="'/article/' + l.link" variant="outlined" min-width="200px">
                    <div style="font-size: 16px; width: 100%">{{ l.title }}</div>
                  </v-btn>
                </div>
              </v-timeline-item>
          </v-timeline>
        </div>
    </v-card>
  </div>
</template>

<style scoped>
a{
  color: white;
}
.tl{
    min-width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>