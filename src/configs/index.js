import load from '../assets/loading.webp'
const cfg = (()=>({
    lazy: load,
    info:{
        name: 'Yueer',
        avatar: "https://cdn.yueermoe.cn/blog/logo.webp",
        title: 'Yue\'s Blog',
        logo: 'https://cdn.yueermoe.cn/blog/logo.webp',
        sign: '永远相信美好的事情即将发生',
        mail: 'i@yueer.me'
    },
    footer: {
        social: [
            {
                icon: 'mdi-github',
                href: 'https://github.com/YueerMoe'
            },
            {
                icon: 'mdi-twitter',
                href: 'https://twitter.com/Yueerloli'
            }
        ],
        copy: {
            name: 'Yueer',
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