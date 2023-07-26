import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomePage from "../components/pages/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('../components/pages/ArticlePage.vue'),
    },
    {
        path: '/archives',
        name: 'archives',
        component: () => import('../components/pages/ArchivesPage.vue'),
    },
    {
        path: '/links',
        name: 'links',
        component: () => import('../components/pages/LinksPage.vue'),
    }
]

const router = createRouter({
    history: import.meta.env.NODE_ENV === 'production'? createWebHistory() : createWebHashHistory(),
    routes
})

export default router
