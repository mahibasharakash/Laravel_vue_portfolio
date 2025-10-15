import {createRouter, createWebHistory} from "vue-router";

const hospital_title = 'Hospital Template - ';

import hospital_auth_layout from "../../hospital/authentication/layout/layout.vue";
import hospital_auth_login from "../../hospital/authentication/pages/login.vue";
import hospital_auth_registration from "../../hospital/authentication/pages/registration.vue";
import hospital_auth_forgot from "../../hospital/authentication/pages/forgot.vue";
import hospital_auth_reset from "../../hospital/authentication/pages/reset.vue";
import hospital_auth_verification from "../../hospital/authentication/pages/verification.vue";

import hospital_portal_layout from "../../hospital/portal/layout/layout.vue";
import hospital_portal_home from "../../hospital/portal/pages/home.vue";
import hospital_portal_about from "../../hospital/portal/pages/about.vue";
import hospital_portal_contact from "../../hospital/portal/pages/contact.vue";
import hospital_portal_appointment from "../../hospital/portal/pages/appointment.vue";

import hospital_user_layout from "../../hospital/user/layout/layout.vue";
import hospital_user_details from "../../hospital/user/pages/details.vue";

const routes = [

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
    }

];

const router = createRouter({ history: createWebHistory(), routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) { return { el: to.hash, behavior: 'smooth' }; } else { return {top: 0, behavior: 'smooth'}; }
    }
});

export default router;
