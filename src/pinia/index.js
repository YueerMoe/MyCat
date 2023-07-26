import {defineStore} from "Pinia";
import {inject, ref} from "vue";
;
const useIndex = defineStore('index', ()=>{
    const index = ref()
    async function get(){
        const axios = inject('axios')
        index.value = await axios.get('/articles/index.json').then(res =>{ return res.data}).catch(err => {return err})
    }
    return {index, get}
})
export default useIndex;