import {createRouter, createWebHistory} from "vue-router";

// Portfolio portal

const portfolio_title = 'Portfolio Template - ';

import portfolio_portal_layout from "../portfolio/portal/layout/layout.vue";
import portfolio_home from "../portfolio/portal/pages/home.vue";

// blog authentication and portal

const blog_title = 'Blog Template - ';

import blog_auth_layout from "../blog/authentication/layout/layout.vue";
import blog_auth_login from "../blog/authentication/pages/login.vue";
import blog_auth_registration from "../blog/authentication/pages/registration.vue";
import blog_auth_forgot from "../blog/authentication/pages/forgot.vue";
import blog_auth_reset from "../blog/authentication/pages/reset.vue";
import blog_auth_verification from "../blog/authentication/pages/verification.vue";

import blog_portal_layout from "../blog/portal/layout/layout.vue";
import blog_portal_home from "../blog/portal/pages/home.vue";
import blog_portal_post_details from "../blog/portal/pages/details.vue";

import blog_user_layout from "../blog/user/layout/layout.vue";
import blog_user_post from "../blog/user/pages/post.vue";
import blog_user_category from "../blog/user/pages/category.vue";
import blog_user_details from "../blog/user/pages/details.vue";

// ecommerce authentication and portal

const ecommerce_title = 'Blog Template - ';

import ecommerce_auth_layout from "../ecommerce/authentication/layout/layout.vue";
import ecommerce_auth_login from "../ecommerce/authentication/pages/login.vue";
import ecommerce_auth_registration from "../ecommerce/authentication/pages/registration.vue";
import ecommerce_auth_forgot from "../ecommerce/authentication/pages/forgot.vue";
import ecommerce_auth_reset from "../ecommerce/authentication/pages/reset.vue";
import ecommerce_auth_verification from "../ecommerce/authentication/pages/verification.vue";

import ecommerce_portal_layout from "../ecommerce/portal/layout/layout.vue";
import ecommerce_portal_home from "../ecommerce/portal/pages/home.vue";
import ecommerce_portal_about from "../ecommerce/portal/pages/about.vue";
import ecommerce_portal_contact from "../ecommerce/portal/pages/contact.vue";
import ecommerce_portal_shop from "../ecommerce/portal/pages/shop.vue";

// learning management authentication and portal

const learning_management_title = 'Learning Management Template - ';

import learning_management_auth_layout from "../learning-management/authentication/layout/layout.vue";
import learning_management_auth_login from "../learning-management/authentication/pages/login.vue";
import learning_management_auth_registration from "../learning-management/authentication/pages/registration.vue";
import learning_management_auth_forgot from "../learning-management/authentication/pages/forgot.vue";
import learning_management_auth_reset from "../learning-management/authentication/pages/reset.vue";
import learning_management_auth_verification from "../learning-management/authentication/pages/verification.vue";

import learning_management_portal_layout from "../learning-management/portal/layout/layout.vue";
import learning_management_portal_home from "../learning-management/portal/pages/home.vue";
import learning_management_portal_about from "../learning-management/portal/pages/about.vue";
import learning_management_portal_contact from "../learning-management/portal/pages/contact.vue";
import learning_management_portal_course from "../learning-management/portal/pages/course.vue";

// chat application authentication and portal

const chat_application_title = 'Chat Application Template - ';

import chat_application_auth_layout from "../chat-application/authentication/layout/layout.vue";
import chat_application_auth_login from "../chat-application/authentication/pages/login.vue";
import chat_application_auth_registration from "../chat-application/authentication/pages/registration.vue";
import chat_application_auth_forgot from "../chat-application/authentication/pages/forgot.vue";
import chat_application_auth_reset from "../chat-application/authentication/pages/reset.vue";
import chat_application_auth_verification from "../chat-application/authentication/pages/verification.vue";

import chat_application_portal_layout from "../chat-application/portal/layout/layout.vue";
import chat_application_portal_home from "../chat-application/portal/pages/home.vue";

import chat_application_user_layout from "../chat-application/user/layout/layout.vue";
import chat_application_user_chat from "../chat-application/user/pages/chat.vue";

// hospital authentication and portal

const hospital_title = 'Hospital Template - ';

import hospital_auth_layout from "../hospital/authentication/layout/layout.vue";
import hospital_auth_login from "../hospital/authentication/pages/login.vue";
import hospital_auth_registration from "../hospital/authentication/pages/registration.vue";
import hospital_auth_forgot from "../hospital/authentication/pages/forgot.vue";
import hospital_auth_reset from "../hospital/authentication/pages/reset.vue";
import hospital_auth_verification from "../hospital/authentication/pages/verification.vue";

import hospital_portal_layout from "../hospital/portal/layout/layout.vue";
import hospital_portal_home from "../hospital/portal/pages/home.vue";
import hospital_portal_about from "../hospital/portal/pages/about.vue";
import hospital_portal_contact from "../hospital/portal/pages/contact.vue";
import hospital_portal_appointment from "../hospital/portal/pages/appointment.vue";

import hospital_user_layout from "../hospital/user/layout/layout.vue";
import hospital_user_details from "../hospital/user/pages/details.vue";

const routes = [

    { path: '/', name: 'portfolio_portal_layout', component: portfolio_portal_layout,
        children: [
            { path: '', name: 'portfolio_home', component: portfolio_home, meta: {title: portfolio_title + 'Home'} },
        ]
    },

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
    },

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
        ]
    },

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
    },

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
    },

    { path: '/hospital_template', name: 'hospital_portal_layout', component: hospital_portal_layout,
        children: [
            { path: '', name: 'hospital_portal_home', component: hospital_portal_home, meta: {title: hospital_title + 'Home'} },
            { path: 'about', name: 'hospital_portal_about', component: hospital_portal_about, meta: {title: hospital_title + 'About'} },
            { path: 'contact', name: 'hospital_portal_contact', component: hospital_portal_contact, meta: {title: hospital_title + 'Contact'} },
            { path: 'appointment', name: 'hospital_portal_appointment', component: hospital_portal_appointment, meta: {title: hospital_title + 'Appointment'} },
            { path: 'auth', name: 'hospital_auth_layout', component: hospital_auth_layout,
                children: [
                    { path: 'login', name: 'hospital_auth_login', component: hospital_auth_login, meta: {title: hospital_title + 'Login'} },
                    { path: 'registration', name: 'hospital_auth_registration', component: hospital_auth_registration, meta: {title: hospital_title + 'Registration'} },
                    { path: 'forgot', name: 'hospital_auth_forgot', component: hospital_auth_forgot, meta: {title: hospital_title + 'Forgot'} },
                    { path: 'reset', name: 'hospital_auth_reset', component: hospital_auth_reset, meta: {title: hospital_title + 'Reset'} },
                    { path: 'verification', name: 'hospital_auth_verification', component: hospital_auth_verification, meta: {title: hospital_title + 'Verification'} },
                ]
            },
            { path: 'user', name: 'hospital_user_layout', component: hospital_user_layout,
                children: [
                    { path: '', name: 'hospital_user_details', component: hospital_user_details, meta: {title: hospital_title + 'Details'} },
                ]
            },
        ]
    },

];

const router = createRouter({ history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { return { el: to.hash, behavior: 'smooth' }; } else { return {top: 0, behavior: 'smooth'}; }
    }
});

export default router;
