<template>

    <section class="w-full">
        <div class="max-w-7xl mx-auto w-full p-7">
            <div class="w-full flex flex-wrap">
                <div class="w-full lg:w-2/3 px-3 py-5">

                    <template v-for="each in 4">
                        <RouterLink :to="{name:'blog_portal_post_details',params: {slug:1}}" class="mb-11 block w-full bg-gray-50 rounded-md overflow-hidden group shadow-lg duration-500 hover:shadow-xl">
                            <div class="w-full overflow-hidden min-h-[350px] max-h-[350px]">
                                <img :src="'/blog/laptop.jpg'" class="w-full object-cover bg-cover scale-100 duration-500 group-hover:scale-125 min-h-[350px] max-h-[350px]" alt="laptop" />
                            </div>
                            <div class="px-5 py-6 flex justify-between items-center">
                                <div class="text-xs font-medium text-gray-700"> 3 minutes ago </div>
                                <div class="text-xs font-medium text-gray-700"> 20 Sep 2025 </div>
                            </div>
                            <div class="flex justify-start items-center px-6 pb-5">
                                <div class="min-w-[55px] max-w-[55px] min-h-[55px] max-h-[55px] inline-flex justify-center items-center bg-emerald-700 text-white rounded-full">
                                    MB
                                </div>
                                <div class="ms-2">
                                    <span class="block text-xs font-medium text-gray-950 mb-1"> Mahi Bashar Akash </span>
                                    <span class="block text-xs font-medium text-gray-500"> mahibashar2000002@gmail.com </span>
                                </div>
                            </div>
                            <div class="text-xl font-medium block px-6 pb-5">
                                <div class="text-truncate-line-2">
                                    Latest New Brand Laptop
                                </div>
                            </div>
                            <div class="text-xs font-medium block px-6 pb-6">
                                <div class="text-truncate-line-3 text-gray-500">
                                    he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                                </div>
                            </div>
                        </RouterLink>
                    </template>

                    <div class="w-full mt-7 flex justify-start items-center gap-1.5">
<!--                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">-->
<!--                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />-->
<!--                            </svg>-->
<!--                        </button>-->
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            1
                        </button>
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            2
                        </button>
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            3
                        </button>
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            4
                        </button>
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            5
                        </button>
                        <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full bg-emerald-600 text-white hover:bg-emerald-950 duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div class="w-full lg:w-1/3 p-3">
                    <div class="top-30 sticky">
                        <div class="w-full p-5 bg-gray-50 rounded-lg shadow-lg mb-5">
                            <label for="search" class="form-label text-xl mb-4 hidden"> Search </label>
                            <div class="w-full relative">
                                <div class="absolute top-0 bottom-0 start-0 ps-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                <input id="search" type="text" name="search" placeholder="Search Here..." class="w-full block border border-gray-100 bg-white shadow-inner shadow-gray-300 outline-0 ps-12 pe-5 py-3 rounded-lg" />
                            </div>
                        </div>
                        <div class="w-full p-5 bg-gray-50 rounded-lg shadow-lg mb-5">
                            <div class="form-label text-xl mb-4"> Category </div>
                            <div class="w-full flex flex-wrap gap-2">
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Food
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Dress
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Shelter
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Education
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Treatment
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    Technology
                                </button>
                                <button type="button" class="px-3.5 py-1.5 outline-0 bg-emerald-700 text-white hover:bg-emerald-900 duration-500 text-xs cursor-pointer rounded-sm inline-block ring-emerald-700/50 ring-0 focus:ring-4">
                                    All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
