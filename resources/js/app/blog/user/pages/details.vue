<template>

    <section class="w-full bg-cover object-cover relative before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-black/65 before:backdrop-blur-sm" :style="{ backgroundImage: 'url(/blog/breadcrumb.jpg)' }">
        <div class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> User Details </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-6 bg-white -rotate-30"></div>
                <RouterLink :to="{name:'blog_user_details'}" class="inline-block decoration-0 text-white text-sm">
                    User Details
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full py-16">
        <div class="w-full mx-auto max-w-7xl px-10">

            <!-- update profile -->
            <form class="w-full p-10 bg-gray-100 mb-5">
                <div class="text-xl mb-2 block w-full"> Edit Profile </div>
                <div class="text-xs mb-10 block w-full"> Update your account's profile information and email address. </div>
                <div class="max-w-[500px] w-full">
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> Name </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> Email </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> Phone Number </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> Present Address </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full block">
                        <button type="submit" class="min-h-[48px] max-h-[48px] px-6 bg-green-600 duration-500 hover:bg-green-800 cursor-pointer text-xs text-white rounded-md">
                            Update
                        </button>
                    </div>
                </div>
            </form>
            <!-- / update profile -->

            <!-- update password -->
            <form class="w-full p-10 bg-gray-100 mb-5">
                <div class="text-xl mb-2 block w-full"> Change Password </div>
                <div class="text-xs mb-10 block w-full"> Ensure your account is using a long, random password to stay secure. </div>
                <div class="max-w-[500px] w-full">
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> Current Password </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> New Password </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full mb-4 block">
                        <label for="" class="w-full block mb-2 font-semibold text-xs"> New Password Confirmation </label>
                        <input type="text" name="" class="w-full block min-h-[48px] max-h-[48px] px-5 outline-0 bg-white ring-0 ring-green-500/75 focus-within:ring-2 rounded-md duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full block">
                        <button type="submit" class="min-h-[48px] max-h-[48px] px-6 bg-green-600 duration-500 hover:bg-green-800 cursor-pointer text-xs text-white rounded-md">
                            Update
                        </button>
                    </div>
                </div>
            </form>
            <!-- / update password -->

            <!-- delete account -->
            <form class="w-full p-10 bg-gray-100">
                <div class="text-xl mb-2 block w-full"> Delete Account </div>
                <div class="text-xs mb-5 block w-full max-w-[700px]"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div>
                <div class="w-full block">
                    <button type="submit" class="min-h-[48px] max-h-[48px] px-6 bg-red-600 duration-500 hover:bg-red-800 cursor-pointer text-xs text-white rounded-md">
                        Confirm
                    </button>
                </div>
            </form>
            <!-- / delete account -->

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
