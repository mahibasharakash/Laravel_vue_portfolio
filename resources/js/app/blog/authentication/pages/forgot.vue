<template>

    <form class="min-w-[340px] sm:min-w-[410px] mx-auto px-8 py-5 bg-gray-100 shadow-md">
        <div class="text-lg font-medium mb-7 text-center"> Forgot Password </div>
        <div class="w-full block mb-4">
            <label for="email" class="block mb-2 w-full text-sm font-medium"> Email </label>
            <input id="email" type="email" name="email" class="w-full block border border-gray-100 bg-white outline-0 px-5 min-h-[48px] max-h-[48px] rounded-lg ring-0 focus-within:ring-4 ring-emerald-500 duration-500" required autocomplete="off" />
        </div>
        <div class="w-full block mb-10">
            <button type="submit" class="cursor-pointer min-w-[120px] max-w-[120px] min-h-[48px] max-h-[48px] text-sm font-medium text-white rounded-lg outline-0 bg-emerald-500 duration-500 hover:bg-emerald-800">
                Send
            </button>
        </div>
        <div class="w-full text-center text-xs font-medium text-gray-600">
            Remember your password? <RouterLink :to="{name:'blog_auth_registration'}" class="decoration-0 text-emerald-800 text-xs font-medium">Create an account</RouterLink>
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
