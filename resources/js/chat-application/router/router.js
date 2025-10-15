import {createRouter, createWebHistory} from "vue-router";

const chat_application_title = 'Chat Application Template - ';

import chat_application_auth_layout from "../../chat-application/authentication/layout/layout.vue";
import chat_application_auth_login from "../../chat-application/authentication/pages/login.vue";
import chat_application_auth_registration from "../../chat-application/authentication/pages/registration.vue";
import chat_application_auth_forgot from "../../chat-application/authentication/pages/forgot.vue";
import chat_application_auth_reset from "../../chat-application/authentication/pages/reset.vue";
import chat_application_auth_verification from "../../chat-application/authentication/pages/verification.vue";

import chat_application_portal_layout from "../../chat-application/portal/layout/layout.vue";
import chat_application_portal_home from "../../chat-application/portal/pages/home.vue";

import chat_application_user_layout from "../../chat-application/user/layout/layout.vue";
import chat_application_user_chat from "../../chat-application/user/pages/chat.vue";

const routes = [

    { path: '/chat_application_template', name: 'chat_application_portal_layout', component: chat_application_portal_layout,
        children: [
            { path: '', name: 'chat_application_portal_home', component: chat_application_portal_home, meta: {title: chat_application_title + 'Home'} },
            { path: 'auth', name: 'chat_application_auth_layout', component: chat_application_auth_layout,
                children: [
                    { path: 'login', name: 'chat_application_auth_login', component: chat_application_auth_login, meta: {title: chat_application_title + 'Login'} },
                    { path: 'registration', name: 'chat_application_auth_registration', component: chat_application_auth_registration, meta: {title: chat_application_title + 'Registration'} },
                    { path: 'forgot', name: 'chat_application_auth_forgot', component: chat_application_auth_forgot, meta: {title: chat_application_title + 'Forgot'} },
                    { path: 'reset', name: 'chat_application_auth_reset', component: chat_application_auth_reset, meta: {title: chat_application_title + 'Reset'} },
                    { path: 'verification', name: 'chat_application_auth_verification', component: chat_application_auth_verification, meta: {title: chat_application_title + 'Verification'} },
                ]
            },
            { path: 'user', name: 'chat_application_user_layout', component: chat_application_user_layout,
                children: [
                    { path: '', name: 'chat_application_user_chat', component: chat_application_user_chat, meta: {title: chat_application_title + 'User Chat'} },
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
