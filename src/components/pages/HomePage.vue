<script setup>
import {onMounted, ref} from "vue";
import cfg from "../../configs/index.js";
import useIndex from "../../pinia/index.js";
const lazy = ref(cfg().lazy)

const list = ref()

onMounted(async () => {
  const i = useIndex()
  await i.get()
  list.value = i.index
})

</script>

<template>
  <div style="margin: 20px 5px 25px;" v-for="a in list" :key="a">
      <v-hover v-slot="{ isHovering, props}">
        <v-card

            v-bind="props"
            class="mx-auto rounded-lg"
            max-width="800px"
            min-width="300px"
            color="primary"
        >
          <router-link :to="'/article/' + a.permalink">
            <v-img
                :class="{ 'on-hover': isHovering, 'out-hover': !isHovering }"
                :src="a.preview"
                class="align-end art-bg"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                cover
            >
              <v-card-title class="text-white" v-text="a.title">
              </v-card-title>
              <v-card-subtitle>
                {{ a.excerpt }}
              </v-card-subtitle>
            </v-img>
          <v-card-actions min-width="300px">
            <div>
              <v-icon size="small" color="white">mdi-clock</v-icon>
              <span>
            {{
                  new Date(a.date).toISOString().slice(0, 10)
                }}
          </span>
            </div>
            <v-spacer></v-spacer>
            <div v-for="t in a.tags" :key="t">
              <v-icon size="small" color="grey">mdi-tag</v-icon>
              <span v-text="t"></span>
            </div>
          </v-card-actions>
          </router-link>
        </v-card>
      </v-hover>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .art-bg{
    height: 200px;
  }
}
@media screen and (min-width: 600px) {
  .art-bg{
    height: 300px;
  }
}
.v-card .v-img{
  transition: opacity .4s ease-in-out;
}
.out-hover{
  overflow:hidden
}
.out-hover /deep/ img{
  width: 100%;
  height: 100%;
  filter: blur(8px);
}
</style>