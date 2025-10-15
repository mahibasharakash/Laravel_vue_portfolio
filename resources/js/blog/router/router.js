import {createRouter, createWebHistory} from "vue-router";

const blog_title = 'Blog Template - ';

import blog_auth_layout from "../authentication/layout/layout.vue";
import blog_auth_login from "../authentication/pages/login.vue";
import blog_auth_registration from "../authentication/pages/registration.vue";
import blog_auth_forgot from "../authentication/pages/forgot.vue";
import blog_auth_reset from "../authentication/pages/reset.vue";
import blog_auth_verification from "../authentication/pages/verification.vue";

import blog_portal_layout from "../portal/layout/layout.vue";
import blog_portal_home from "../portal/pages/home.vue";
import blog_portal_post_details from "../portal/pages/details.vue";

import blog_user_layout from "../user/layout/layout.vue";
import blog_user_post from "../user/pages/post.vue";
import blog_user_category from "../user/pages/category.vue";
import blog_user_details from "../user/pages/details.vue";

const routes = [

    { path: '/blog_template', name: 'blog_portal_layout', component: blog_portal_layout,
        children: [
            { path: '', name: 'blog_portal_home', component: blog_portal_home, meta: {title: blog_title + 'Home'} },
            { path: 'post_details/:slug', name: 'blog_portal_post_details', component: blog_portal_post_details, meta: {title: blog_title + 'Post Details'} },
            { path: 'auth', name: 'blog_auth_layout', component: blog_auth_layout,
                children: [
                    { path: 'login', name: 'blog_auth_login', component: blog_auth_login, meta: {title: blog_title + 'Login'} },
                    { path: 'registration', name: 'blog_auth_registration', component: blog_auth_registration, meta: {title: blog_title + 'Registration'} },
                    { path: 'forgot', name: 'blog_auth_forgot', component: blog_auth_forgot, meta: {title: blog_title + 'Forgot'} },
                    { path: 'reset', name: 'blog_auth_reset', component: blog_auth_reset, meta: {title: blog_title + 'Reset'} },
                    { path: 'verification', name: 'blog_auth_verification', component: blog_auth_verification, meta: {title: blog_title + 'Verification'} },
                ]
            },
            { path: 'user', name: 'blog_user_layout', component: blog_user_layout,
                children: [
                    { path: '', name: 'blog_user_post', component: blog_user_post, meta: {title: blog_title + 'User Post Module'} },
                    { path: 'category', name: 'blog_user_category', component: blog_user_category, meta: {title: blog_title + 'User Category Module'} },
                    { path: 'details', name: 'blog_user_details', component: blog_user_details, meta: {title: blog_title + 'User Details Module'} },
                ]
            },
        ]
    }

];

const router = createRouter({ history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { return { el: to.hash, behavior: 'smooth' }; } else { return {top: 0, behavior: 'smooth'}; }
    }
});

export default router;
