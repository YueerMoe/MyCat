<script setup>
import cfg from "../../configs/index.js";
import {ref} from "vue";

const c = ref(cfg().footer)
</script>

<template>
  <v-footer
      class="text-center d-flex flex-column"
      color="primary"
      app
  >
    <div>
      <v-btn
          v-for="s in c.social"
          :key="s"
          class="mx-4"
          :icon="s.icon"
          :href="s.href"
          variant="text"
      ></v-btn>
    </div>
    <div class="pt-0">
      <div class="beian">
        <div v-if="c.icp" class="beian-info">
          <div>
            <v-img
                src="data:image/png;base64,AAABAAEAEBAAAAEAGADqAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADf0lEQVQ4T23Te0zTVxQH8KrJNJlTydh4pEZRQdlkimwiRoXhpMH3rwNKmVU62iB0gCKIdgJRoHOgJpgiURFW2WASqlGYE7BKGS8fiDBbClVa+v7RlmCKzkT3+/qzUcwW7j83uTnnc849uZfBmGIBjz54brgVrqgquiYvEfc51fJ4ihqaM1Xsf84ATNe0/LRfdpDXIxNseHVhVwgqRRtRL0mgZIcEus6aYyVvYqaEKIqa+aKvcIckiYMj7Eh0fRsADcsPxsTlUKWFo/oYH0e/5+KVRsqjkRn/q6ybZVbm7jvMSTAl7EyEPjsYA4E+6PvMF4PRgej1nYcnBzdCIs6GMIrtGO34sXjs/vG5kwhFVXxUWyk+5784D7UnuSBZPlD5fgL1QhqZ7UFDTAyt/BR3qlPAYKRDWpJzD7p870nA2ZzKbfslmQwIEOMPySYYI5h45OUB1WZ/DO0JgjqICfUyTwzU8cGYloGKMrHrX/PPhZTj7WBH5EkX+2XfIWi5BKV5PNgLQ9AZxkRfZgiGz0dBmxkGc+5a3DhLA4wstMpz4OpI6SZ7Li5xd6GVJT4x1MYiOvYkFjBT8TAtGBreCjxg0YMUfgVN3BfQ5UYgJnQ3PJYUwdL+Awy/sS0jjekhbkBdyXlhLY9EWelRusJhdH84F6Os+bgbtxSq7FA4077EsNfHWMmIQUreKUxc347BKmLc2Lx3jRvQ14vukFcImNpy4LemFFtnhOPEnEWonu+Hq/70vjoUWd5fI3BhBgZu78fTdgEszYKH9vv5y9yAoWEfqT1HwCFno0VegCRuJiLWiZDO5qNcSGBVkAirgrNwuigbE4ptGLm0A1YF3+HoFa92A/aeItlwHYFBKQuPi8Pg/CsROuVuWBTxsF7eAnWTEBrlXugvsDAk/QaGa3SxntTGZyMVvm6AcvV7jf2dW2Np47zsL1iPx5VRcLbzYW2Mga2Fi/FeIWzX46EtjwZ5Nw2Wzsy2f2z1iybfwYSuztvedaTG1pX00qqkE29wMNpKPyjlHox18GC+shNGOQF7dzJsnckw3Uy+N2YsX/Ee0J/ycQ3nn7E/EDnNdLL9FgfknwTI5liQDdtpgL5zE92NchccqgPjTy2Fv7qc0s8nAfpzTDNrTngamwSRmopYibpqs0L/OzFoqies1oY4u6mB10+2Z7QYW7MKnNr8tS5bjde75NesNyRaAhHzqgAAAABJRU5ErkJggg=="
                width="15"
            >
            </v-img>
          </div>
          <div>
            <a href="https://beian.miit.gov.cn/">
              <span v-text="c.icp"></span>
            </a>
          </div>
        </div>
        <div v-if="c.gov.code" class="beian-info">
          <div>
            <v-img
                src="data:image/png;base64,AAABAAEAEBAAAAEAGADqAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADf0lEQVQ4T23Te0zTVxQH8KrJNJlTydh4pEZRQdlkimwiRoXhpMH3rwNKmVU62iB0gCKIdgJRoHOgJpgiURFW2WASqlGYE7BKGS8fiDBbClVa+v7RlmCKzkT3+/qzUcwW7j83uTnnc849uZfBmGIBjz54brgVrqgquiYvEfc51fJ4ihqaM1Xsf84ATNe0/LRfdpDXIxNseHVhVwgqRRtRL0mgZIcEus6aYyVvYqaEKIqa+aKvcIckiYMj7Eh0fRsADcsPxsTlUKWFo/oYH0e/5+KVRsqjkRn/q6ybZVbm7jvMSTAl7EyEPjsYA4E+6PvMF4PRgej1nYcnBzdCIs6GMIrtGO34sXjs/vG5kwhFVXxUWyk+5784D7UnuSBZPlD5fgL1QhqZ7UFDTAyt/BR3qlPAYKRDWpJzD7p870nA2ZzKbfslmQwIEOMPySYYI5h45OUB1WZ/DO0JgjqICfUyTwzU8cGYloGKMrHrX/PPhZTj7WBH5EkX+2XfIWi5BKV5PNgLQ9AZxkRfZgiGz0dBmxkGc+5a3DhLA4wstMpz4OpI6SZ7Li5xd6GVJT4x1MYiOvYkFjBT8TAtGBreCjxg0YMUfgVN3BfQ5UYgJnQ3PJYUwdL+Awy/sS0jjekhbkBdyXlhLY9EWelRusJhdH84F6Os+bgbtxSq7FA4077EsNfHWMmIQUreKUxc347BKmLc2Lx3jRvQ14vukFcImNpy4LemFFtnhOPEnEWonu+Hq/70vjoUWd5fI3BhBgZu78fTdgEszYKH9vv5y9yAoWEfqT1HwCFno0VegCRuJiLWiZDO5qNcSGBVkAirgrNwuigbE4ptGLm0A1YF3+HoFa92A/aeItlwHYFBKQuPi8Pg/CsROuVuWBTxsF7eAnWTEBrlXugvsDAk/QaGa3SxntTGZyMVvm6AcvV7jf2dW2Np47zsL1iPx5VRcLbzYW2Mga2Fi/FeIWzX46EtjwZ5Nw2Wzsy2f2z1iybfwYSuztvedaTG1pX00qqkE29wMNpKPyjlHox18GC+shNGOQF7dzJsnckw3Uy+N2YsX/Ee0J/ycQ3nn7E/EDnNdLL9FgfknwTI5liQDdtpgL5zE92NchccqgPjTy2Fv7qc0s8nAfpzTDNrTngamwSRmopYibpqs0L/OzFoqies1oY4u6mB10+2Z7QYW7MKnNr8tS5bjde75NesNyRaAhHzqgAAAABJRU5ErkJggg=="
                width="15"
            >
            </v-img>
          </div>
          <div>
            <a :href="'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=' + c.gov.code">
            <span>
              {{ c.gov.province }}公安网备{{ c.gov.code }}号
            </span>
            </a>
          </div>
        </div>
        <div v-if="c.moe_icp" class="beian-info">
          <div>
            <v-img
                src="data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9N3/CP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACXMv4UiRr+hYYX/uuHGf7nihz/hZ06/xQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHFv5Ghhb+8bNq//+9e/7/vXr+/7Jn/v+GF//xihv/RgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHFP9IjCD/98WL//+QKP7/hBP//4QT//+RKv7/xYv+/4sf/veKGv9IAAAAAAAAAAAAAAAAAAAAAAAAAACPJv4Shhb+78WL/v+FFv7/hRT//4UU//+FFP//hRT//4YX///Fi/7/hhb+8Zkz/hIAAAAAAAAAAAAAAAAAAAAAhhb/g7Nq/v+QKP//hBP//4QT//+EEv//ghD//4QS//+EE///ky7//7Fm/v+JGv+DAAAAAAAAAAAAAAAA7Mv/CIQU/+nfvf//pVP//5o+//+sYP//t3X//7l6//+2dP//tXD//7Jt///Jkv7/hhj/5f///wAAAAAAAAAAAJkz/iaQJv7/2LD//7Fs///Glf//n0j//7Js//+FFP//tnT//7Jt//+0cP//x5D+/4wg/v+kQ/8mAAAAAAAAAACaOf5kpVD//7Ru/v+xav//w43//40m///Biv//ok7//76F//+0cP//mj///6VR//+iS/7/mDb/VAAAAAAAAAAAjB//ZK9i/v+RJ/7/iBv//4sh//+EE///hRT//5g5//+EE///jib//59I//+cPv//rFz+/5En/mQAAAAAAAAAAIse/2SvYv7/ix7+/8aT//+GFv//hRT//4UU//+FFP//hRT//48o///PpP//lC7//6xd/v+QJv5kAAAAAAAAAACYNf5kplL//6tc/v/Xtf//jif//4UU//+xaf//qFr//4UU//+QKv//u37//6RO/v+jTv7/mzz+YgAAAAAAAAAAnDr/MIYW/vmuYv7/u3f+/7Fm/v+IGf7/y5z//7Zz//+JG/7/smf+/7x4/v+tYf7/hRX/85ct/yQAAAAAAAAAAAAAAACzXv4cjiT/cIYV/seNI/79tm/+/716/v+8ef7/tm/+/4wi/v+HFv7HkCf+cpw1/xIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqlP+NIoc/oeCEf/bgxH/24se/oeuW/42AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA58D/CO3O/wgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPw/AAD4HwAA8A8AAOAHAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAPAPAAD8PwAA//8AAA=="
                width="15"
            >
            </v-img>
          </div>
          <div>
            <a :href="'https://icp.gov.moe/?keyword=' + c.moe_icp">
              <span>萌ICP{{ c.moe_icp }}号</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>

    <div class="copy">
      Copyright &copy; 2023-{{ new Date().getFullYear() }}  <strong><a :href="c.copy.href">{{ c.copy.name }}</a></strong>
      <span>
        |Powered By <strong><a href="https://github.com/BoxCatTeam/OneCat/" target="_blank">OneCat</a></strong>
      </span>
    </div>
  </v-footer>
</template>
<style scoped>
a{
  color: white;
}
@media screen and (min-width: 600px) {
  .beian{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .copy{
    font-size: 16px;
  }
}
@media screen and (max-width: 600px) {
  .beian div{
    display: inline-block;
  }
  .copy{
    font-size: 13px;
  }
}
.beian a{
  color: #bdbdbd;
}
.beian span{
  font-size: 14px;
}
.beian-info{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>