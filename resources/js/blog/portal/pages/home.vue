<template>

    <section class="w-full">
        <div class="max-w-7xl mx-auto w-full p-7">

            <!-- title -->
            <div class="mb-5 w-full block text-xl font-medium"> Recent Reels </div>
            <!-- / title -->

            <!-- grid reels -->
            <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">

                <!-- reels -->
                <div class="w-full cursor-pointer relative min-h-[350px] max-h-[350px] rounded-lg bg-gray-100 overflow-hidden">
                    <img :src="'/blog/laptop.jpg'" class="object-cover bg-cover w-full h-full" alt="reel-blog" />
                    <div class="absolute inset-0 w-full h-full flex items-end p-5 justify-start bg-gradient-to-b from-0% from-transparent via-80% via-black to-100% to-black/45">
                        <div>
                            <div class="flex justify-start items-center mb-3">
                                <div class="font-normal min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] text-xs inline-flex justify-center items-center bg-emerald-700 text-white rounded-full">
                                    MB
                                </div>
                                <span class="ms-2 block text-xs font-medium text-white"> @mahibashar </span>
                            </div>
                            <div class="text-white text-sm"> Latest New Brand Laptop </div>
                        </div>
                    </div>
                </div>
                <!-- / reels -->

                <!-- reels -->
                <div class="w-full cursor-pointer relative min-h-[350px] max-h-[350px] rounded-lg bg-gray-100 overflow-hidden">
                    <img :src="'/blog/laptop.jpg'" class="object-cover bg-cover w-full h-full" alt="reel-blog" />
                    <div class="absolute inset-0 w-full h-full flex items-end p-5 justify-start bg-gradient-to-b from-0% from-transparent via-80% via-black to-100% to-black/45">
                        <div>
                            <div class="flex justify-start items-center mb-3">
                                <div class="font-normal min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] text-xs inline-flex justify-center items-center bg-emerald-700 text-white rounded-full">
                                    MB
                                </div>
                                <span class="ms-2 block text-xs font-medium text-white"> @mahibashar </span>
                            </div>
                            <div class="text-white text-sm"> Latest New Brand Laptop </div>
                        </div>
                    </div>
                </div>
                <!-- / reels -->

                <!-- reels -->
                <div class="w-full cursor-pointer relative min-h-[350px] max-h-[350px] rounded-lg bg-gray-100 overflow-hidden">
                    <img :src="'/blog/laptop.jpg'" class="object-cover bg-cover w-full h-full" alt="reel-blog" />
                    <div class="absolute inset-0 w-full h-full flex items-end p-5 justify-start bg-gradient-to-b from-0% from-transparent via-80% via-black to-100% to-black/45">
                        <div>
                            <div class="flex justify-start items-center mb-3">
                                <div class="font-normal min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] text-xs inline-flex justify-center items-center bg-emerald-700 text-white rounded-full">
                                    MB
                                </div>
                                <span class="ms-2 block text-xs font-medium text-white"> @mahibashar </span>
                            </div>
                            <div class="text-white text-sm"> Latest New Brand Laptop </div>
                        </div>
                    </div>
                </div>
                <!-- / reels -->

                <!-- reels -->
                <div class="w-full cursor-pointer relative min-h-[350px] max-h-[350px] rounded-lg bg-gray-100 overflow-hidden">
                    <img :src="'/blog/laptop.jpg'" class="object-cover bg-cover w-full h-full" alt="reel-blog" />
                    <div class="absolute inset-0 w-full h-full flex items-end p-5 justify-start bg-gradient-to-b from-0% from-transparent via-80% via-black to-100% to-black/45">
                        <div>
                            <div class="flex justify-start items-center mb-3">
                                <div class="font-normal min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] text-xs inline-flex justify-center items-center bg-emerald-700 text-white rounded-full">
                                    MB
                                </div>
                                <span class="ms-2 block text-xs font-medium text-white"> @mahibashar </span>
                            </div>
                            <div class="text-white text-sm"> Latest New Brand Laptop </div>
                        </div>
                    </div>
                </div>
                <!-- / reels -->

            </div>
            <!-- / grid reels -->

            <!-- search post -->
            <div class="mt-5 w-full block">
                <div class="w-full relative max-w-[400px]">
                    <input type="text" name="search" placeholder="Search Here" class="placeholder-black text-xs font-medium w-full border-0 bg-gray-50 shadow-inner shadow-gray-300 min-h-[48px] max-h-[48px] rounded-md duration-500 outline-0 px-12 pe-6 ring-0 focus-within:ring-2 ring-green-600" required autocomplete="off" />
                    <div class="absolute top-0 bottom-0 start-0 ps-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <!-- / search post -->

            <!-- title -->
            <div class="my-5 w-full block text-xl font-medium"> Recent Post </div>
            <!-- / title -->

            <!-- grid posts -->
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

                <!-- post -->
                <template v-for="(each, index) in 10">
                    <RouterLink :to="{name:'blog_portal_post_details',params: {slug:1}}" class="block sm:flex w-full bg-gray-50 rounded-md overflow-hidden group shadow-lg duration-500 hover:shadow-xl">
                        <div class="w-full overflow-hidden min-h-[250px] max-h-[250px] sm:min-w-[250px] sm:max-w-[250px]">
                            <img :src="'/blog/laptop.jpg'" class="w-full object-cover bg-cover scale-100 duration-500 group-hover:scale-125 min-h-[250px] max-h-[250px]" alt="laptop" />
                        </div>
                        <div class="w-full">
                            <div class="text-xl font-medium block px-5 pt-5">
                                <div class="text-truncate-line-2">
                                    Latest New Brand Laptop Latest New Brand Laptop Latest New Brand Laptop Latest New Brand Laptop
                                </div>
                            </div>
                            <div class="font-medium block px-5 pt-3 text-xs">
                                @mahibashar
                            </div>
                            <div class="text-xs font-medium block px-5 pt-3">
                                <div class="text-truncate-line-3 text-gray-500 leading-6">
                                    he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                                </div>
                            </div>
                            <div class="px-5 py-3 w-full block">
                                <div class="text-start text-xs"> 22K Views | 9 days ago </div>
                            </div>
                        </div>
                    </RouterLink>
                </template>
                <!-- / post -->

            </div>
            <!-- / grid posts -->

            <!-- more post button -->
            <div class="w-full flex justify-center mt-10">
                <button type="button" class="min-w-[120px] max-w-[120px] min-h-[45px] max-h-[45px] font-semibold cursor-pointer rounded-md bg-green-500 duration-500 text-xs hover:bg-green-800 text-white">
                    Load More
                </button>
            </div>
            <!-- / more post button -->

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
