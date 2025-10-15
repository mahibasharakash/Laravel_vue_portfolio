<template>

    <form class="min-w-[340px] sm:min-w-[410px] mx-auto px-8 py-10 bg-gray-100 shadow-md">
        <div class="text-2xl font-medium mb-1"> SignIn </div>
        <div class="text-xs font-medium mb-7 text-gray-700"> Welcome, please apply your credentials </div>
        <div class="w-full block mb-4">
            <label for="email" class="block mb-2 w-full text-sm font-medium"> Email </label>
            <input id="email" type="email" name="email" class="w-full block border border-gray-100 bg-white outline-0 px-5 min-h-[48px] max-h-[48px] rounded-lg ring-0 focus-within:ring-4 ring-emerald-500 duration-500" required autocomplete="off" />
        </div>
        <div class="w-full block mb-4">
            <div class="mb-2 w-full flex justify-between items-center">
                <label for="password" class="inline-block w-full text-sm font-medium"> Password </label>
                <RouterLink :to="{name:'blog_auth_forgot'}" class="decoration-0 text-red-500 font-medium min-w-[119px] text-xs">
                    Forgot Password?
                </RouterLink>
            </div>
            <input id="password" type="password" name="password" class="w-full block border border-gray-100 bg-white outline-0 px-5 min-h-[48px] max-h-[48px] rounded-lg ring-0 focus-within:ring-4 ring-emerald-500 duration-500" required autocomplete="off" />
        </div>
        <div class="w-full block mb-10">
            <button type="submit" class="cursor-pointer min-w-[120px] max-w-[120px] min-h-[48px] max-h-[48px] text-sm font-medium text-white rounded-lg outline-0 bg-emerald-500 duration-500 hover:bg-emerald-800">
                Login
            </button>
        </div>
        <div class="w-full text-center text-xs font-medium text-gray-600">
            Not have a account <RouterLink :to="{name:'blog_auth_registration'}" class="decoration-0 text-emerald-800 text-xs font-medium">Create an account</RouterLink>
        </div>
    </form>

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
