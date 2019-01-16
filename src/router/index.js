import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Home2 = resolve => require(['@/views/Home2'], resolve)
const Picker = resolve => require(['@/views/Picker'], resolve)
const Viewer = resolve => require(['@/views/Viewer'], resolve)
const Slider = resolve => require(['@/views/Slider'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home2
    },
    {
        path: '/viewer',
        component: Viewer
    },
    {
        path: '/slider',
        component: Slider
    },
    {
        path: '/picker',
        component: Picker
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
