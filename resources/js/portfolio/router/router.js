import {createRouter, createWebHistory} from "vue-router";

const portfolio_title = 'Portfolio Template - ';

import portfolio_portal_layout from "../../portfolio/portal/layout/layout.vue";
import portfolio_home from "../../portfolio/portal/pages/home.vue";

const routes = [

    { path: '/', name: 'portfolio_portal_layout', component: portfolio_portal_layout,
        children: [
            { path: '', name: 'portfolio_home', component: portfolio_home, meta: {title: portfolio_title + 'Home'} },
        ]
    },

];

const router = createRouter({ history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { return { el: to.hash, behavior: 'smooth' }; } else { return {top: 0, behavior: 'smooth'}; }
    }
});

export default router;
