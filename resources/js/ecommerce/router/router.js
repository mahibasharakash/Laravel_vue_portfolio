import {createRouter, createWebHistory} from "vue-router";

const ecommerce_title = 'Blog Template - ';

import ecommerce_auth_layout from "../../ecommerce/authentication/layout/layout.vue";
import ecommerce_auth_login from "../../ecommerce/authentication/pages/login.vue";
import ecommerce_auth_registration from "../../ecommerce/authentication/pages/registration.vue";
import ecommerce_auth_forgot from "../../ecommerce/authentication/pages/forgot.vue";
import ecommerce_auth_reset from "../../ecommerce/authentication/pages/reset.vue";
import ecommerce_auth_verification from "../../ecommerce/authentication/pages/verification.vue";

import ecommerce_portal_layout from "../../ecommerce/portal/layout/layout.vue";
import ecommerce_portal_home from "../../ecommerce/portal/pages/home.vue";
import ecommerce_portal_about from "../../ecommerce/portal/pages/about.vue";
import ecommerce_portal_contact from "../../ecommerce/portal/pages/contact.vue";
import ecommerce_portal_shop from "../../ecommerce/portal/pages/shop.vue";

import ecommerce_user_layout from "../../ecommerce/user/layout/layout.vue";
import ecommerce_user_details from "../../ecommerce/user/pages/details.vue";

const routes = [

    { path: '/ecommerce_template', name: 'ecommerce_portal_layout', component: ecommerce_portal_layout,
        children: [
            { path: '', name: 'ecommerce_portal_home', component: ecommerce_portal_home, meta: {title: ecommerce_title + 'Home'} },
            { path: 'about', name: 'ecommerce_portal_about', component: ecommerce_portal_about, meta: {title: ecommerce_title + 'About'} },
            { path: 'contact', name: 'ecommerce_portal_contact', component: ecommerce_portal_contact, meta: {title: ecommerce_title + 'Contact'} },
            { path: 'shop', name: 'ecommerce_portal_shop', component: ecommerce_portal_shop, meta: {title: ecommerce_title + 'Shop'} },
            { path: 'auth', name: 'ecommerce_auth_layout', component: ecommerce_auth_layout,
                children: [
                    { path: 'login', name: 'ecommerce_auth_login', component: ecommerce_auth_login, meta: {title: ecommerce_title + 'Login'} },
                    { path: 'registration', name: 'ecommerce_auth_registration', component: ecommerce_auth_registration, meta: {title: ecommerce_title + 'Registration'} },
                    { path: 'forgot', name: 'ecommerce_auth_forgot', component: ecommerce_auth_forgot, meta: {title: ecommerce_title + 'Forgot'} },
                    { path: 'reset', name: 'ecommerce_auth_reset', component: ecommerce_auth_reset, meta: {title: ecommerce_title + 'Reset'} },
                    { path: 'verification', name: 'ecommerce_auth_verification', component: ecommerce_auth_verification, meta: {title: ecommerce_title + 'Verification'} },
                ]
            },
            { path: 'user', name: 'ecommerce_user_layout', component: ecommerce_user_layout,
                children: [
                    { path: '', name: 'ecommerce_user_details', component: ecommerce_user_details, meta: {title: ecommerce_title + 'Details'} },
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
