<template>

    <section class="w-full bg-cover object-cover relative before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-black/65 before:backdrop-blur-sm" :style="{ backgroundImage: 'url(/blog/breadcrumb.jpg)' }">
        <div v-if="$route.name === 'blog_auth_login'" class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Sign In </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_auth_login'}" class="inline-block decoration-0 text-white text-sm">
                    Sign In
                </RouterLink>
            </div>
        </div>
        <div v-if="$route.name === 'blog_auth_registration'" class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Sign Up </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_auth_registration'}" class="inline-block decoration-0 text-white text-sm">
                    Sign Up
                </RouterLink>
            </div>
        </div>
        <div v-if="$route.name === 'blog_auth_forgot'" class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Forgot Password </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_auth_forgot'}" class="inline-block decoration-0 text-white text-sm">
                    Forgot Password
                </RouterLink>
            </div>
        </div>
        <div v-if="$route.name === 'blog_auth_reset'" class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Reset Account </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_auth_reset'}" class="inline-block decoration-0 text-white text-sm">
                    Reset Account
                </RouterLink>
            </div>
        </div>
        <div v-if="$route.name === 'blog_auth_verification'" class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Verification Account </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_auth_verification'}" class="inline-block decoration-0 text-white text-sm">
                    Verification Account
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full">
        <div class="mx-auto max-w-7xl w-full p-7">
            <div class="mx-auto max-w-[450px] w-full">
                <RouterView></RouterView>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
