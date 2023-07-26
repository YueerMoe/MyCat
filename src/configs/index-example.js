import load from '../assets/loading.webp'
const cfg = (()=>({
    lazy: load,
    info:{
        name: '',
        avatar: "",
        title: '',
        logo: '',
        sign: '永远相信美好的事情即将发生',
        mail: ''
    },
    footer: {
        social: [
            {
                icon: 'mdi-github',
                href: 'https://github.com/YueerMoe'
            }
        ],
        copy: {
            name: 'OneCat',
            href: 'https://yueer.moe/'
        },
        icp: '', // ICP备案号
        moe_icp: '2021010101', // Moe备案号
        gov: {
            province: '', // 省份代号
            code: '' // 备案号
        }
    }
}))

export default cfg;