import { createRouter, createWebHashHistory } from 'vue-router'
import { store } from '../store'

import StickerList from '../views/StickerList.vue'
import TradePoint from '../views/TradePoint.vue'
import Home from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/stickers_list", name: "Lista de figurinhas", component: StickerList },
    { path: "/trade_points", name: "Pontos de troca", component: TradePoint },
    { path: "/login", name: "Lista de usuários", component: UserList },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    store.changeAppBarTitle(to.name as string)
    next();
  });

export default router;