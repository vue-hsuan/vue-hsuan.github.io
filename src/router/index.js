// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue'),
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                path: 'profile',
                component: () => import('@/components/Profile.vue'),
            },
        ],
    },
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
