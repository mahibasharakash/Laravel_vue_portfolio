import {createRouter, createWebHistory} from "vue-router";

// learning management authentication and portal

const learning_management_title = 'Learning Management Template - ';

import learning_management_auth_layout from "../../learning-management/authentication/layout/layout.vue";
import learning_management_auth_login from "../../learning-management/authentication/pages/login.vue";
import learning_management_auth_registration from "../../learning-management/authentication/pages/registration.vue";
import learning_management_auth_forgot from "../../learning-management/authentication/pages/forgot.vue";
import learning_management_auth_reset from "../../learning-management/authentication/pages/reset.vue";
import learning_management_auth_verification from "../../learning-management/authentication/pages/verification.vue";

import learning_management_portal_layout from "../../learning-management/portal/layout/layout.vue";
import learning_management_portal_home from "../../learning-management/portal/pages/home.vue";
import learning_management_portal_about from "../../learning-management/portal/pages/about.vue";
import learning_management_portal_contact from "../../learning-management/portal/pages/contact.vue";
import learning_management_portal_course from "../../learning-management/portal/pages/course.vue";

const routes = [

    { path: '/learning_management_template', name: 'learning_management_portal_layout', component: learning_management_portal_layout,
        children: [
            { path: '', name: 'learning_management_portal_home', component: learning_management_portal_home, meta: {title: learning_management_title + 'Home'} },
            { path: 'about', name: 'learning_management_portal_about', component: learning_management_portal_about, meta: {title: learning_management_title + 'About'} },
            { path: 'contact', name: 'learning_management_portal_contact', component: learning_management_portal_contact, meta: {title: learning_management_title + 'Contact'} },
            { path: 'course', name: 'learning_management_portal_course', component: learning_management_portal_course, meta: {title: learning_management_title + 'Shop'} },
            { path: 'auth', name: 'learning_management_auth_layout', component: learning_management_auth_layout,
                children: [
                    { path: 'login', name: 'learning_management_auth_login', component: learning_management_auth_login, meta: {title: learning_management_title + 'Login'} },
                    { path: 'registration', name: 'learning_management_auth_registration', component: learning_management_auth_registration, meta: {title: learning_management_title + 'Registration'} },
                    { path: 'forgot', name: 'learning_management_auth_forgot', component: learning_management_auth_forgot, meta: {title: learning_management_title + 'Forgot'} },
                    { path: 'reset', name: 'learning_management_auth_reset', component: learning_management_auth_reset, meta: {title: learning_management_title + 'Reset'} },
                    { path: 'verification', name: 'learning_management_auth_verification', component: learning_management_auth_verification, meta: {title: learning_management_title + 'Verification'} },
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
