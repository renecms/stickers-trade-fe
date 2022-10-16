import { createRouter, createWebHashHistory } from 'vue-router'

import StickerList from '../components/StickerList.vue'
import Home from '../components/HelloWorld.vue'

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/stickers_list", component: StickerList }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;