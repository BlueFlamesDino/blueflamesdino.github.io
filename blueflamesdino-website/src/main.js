import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

//Pages
import Index from "./pages/Index.vue"
const routes = [
    { paths: "/", component: Index },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//When script loaded create this app using the router to decide what page to display
createApp(App).use(router).mount('#app')
