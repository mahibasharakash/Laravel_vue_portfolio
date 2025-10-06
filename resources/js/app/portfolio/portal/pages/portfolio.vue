<template>

    <!-- hero section -->
    <section class="w-full relative z-5">

        <!-- slider -->
        <img :src="'/images/slider-background.jpg'" class="w-full h-[350px] object-cover object-top bg-top" alt="slider" />
        <!-- / slider -->

        <!-- content -->
        <div class="w-full px-10 h-full absolute inset-0 flex justify-end pb-10 items-center flex-col bg-black/75 z-5">

            <!-- title -->
            <div class="text-white text-3xl text-center">
                Portfolio
            </div>
            <!-- / title -->

            <!-- description -->
            <div class="text-lg text-center text-white max-w-[500px] my-5 flex justify-center items-center gap-4">
                <a href="javascript:void(0)" class="decoration-0 text-white">
                    Home
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-5 h-5 -mb-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                <a href="javascript:void(0)" class="decoration-0 text-white">
                    Portfolio
                </a>
            </div>
            <!-- / description -->

        </div>
        <!-- content -->

    </section>
    <!-- / hero section -->

    <!-- portfolio -->
    <section class="w-full">
        <div class="px-10 max-w-7xl mx-auto w-full py-16">
            <div class="w-full flex items-start flex-wrap">
                <div class="w-full lg:w-2/3 p-5 order-2 lg:order-1">

                    <!-- portfolio grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">

                        <!-- portfolio column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                            <!-- content -->
                            <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-amber-800 to-white/25 opacity-0 duration-500">
                                <div class="text-white opacity-100 p-8">
                                    <div class="text-xl mb-2"> Development </div>
                                    <div class="text-sm"> Web Business Plan </div>
                                </div>
                            </div>
                            <!-- / content -->

                            <!-- image -->
                            <img :src="'/images/portfolio-img-1.webp'" alt="portfolio-img-1" class="object-cover bg-cover w-full min-h-[450px] max-h-[450px]" />
                            <!-- / image -->

                        </a>
                        <!-- / portfolio column -->

                        <!-- portfolio column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                            <!-- content -->
                            <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-amber-800 to-white/25 opacity-0 duration-500">
                                <div class="text-white opacity-100 p-8">
                                    <div class="text-xl mb-2"> Web Consultancy </div>
                                    <div class="text-sm"> Web Consultancy Plan </div>
                                </div>
                            </div>
                            <!-- / content -->

                            <!-- image -->
                            <img :src="'/images/portfolio-img-2.webp'" alt="portfolio-img-2" class="object-cover bg-cover w-full min-h-[450px] max-h-[450px]" />
                            <!-- / image -->

                        </a>
                        <!-- / portfolio column -->

                        <!-- portfolio column -->
                        <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                            <!-- content -->
                            <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-amber-800 to-white/25 opacity-0 duration-500">
                                <div class="text-white opacity-100 p-8">
                                    <div class="text-xl mb-2"> Content Writing </div>
                                    <div class="text-sm"> Content Writing Plan </div>
                                </div>
                            </div>
                            <!-- / content -->

                            <!-- image -->
                            <img :src="'/images/portfolio-img-3.webp'" alt="portfolio-img-3" class="object-cover bg-cover w-full min-h-[450px] max-h-[450px]" />
                            <!-- / image -->

                        </a>
                        <!-- / portfolio column -->

                    </div>
                    <!-- / portfolio grid -->

                    <!-- blog pagination and count -->
                    <div class="flex flex-wrap gap-5 items-center justify-between mt-10">
                        <div class="flex items-center justify-start gap-1">
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1" stroke="currentColor" class="min-w-3.5 max-w-3.5 min-h-3.5 max-h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                1
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                2
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                3
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                4
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                5
                            </button>
                            <button type="button" class="cursor-pointer inline-flex justify-center items-center text-xs font-medium min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] outline-0 border-0 bg-yellow-400 text-black duration-500 hover:bg-yellow-800 hover:text-white rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.1" stroke="currentColor" class="min-w-3.5 max-w-3.5 min-h-3.5 max-h-3.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="font-medium">
                            10 out of 20 as 300
                        </div>
                    </div>
                    <!-- / blog pagination and count -->

                </div>
                <div class="w-full lg:w-1/3 p-5 order-1 lg:order-2">
                    <div class="grid grid-cols-1 gap-5">

                        <!-- blog search -->
                        <div class="w-full bg-gray-100 p-5 rounded-lg">
                            <label for="search" class="form-label text-xl mb-3"> Search </label>
                            <div class="relative">
                                <input id="search" type="text" name="search" class="form-control ps-12" placeholder="Search Here" autocomplete="off" />
                                <div class="absolute top-0 bottom-0 start-0 ps-3.5 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <!-- blog search -->

                        <!-- blog category -->
                        <div class="w-full bg-gray-100 p-5 rounded-lg">
                            <label for="search" class="form-label text-xl mb-3"> Category </label>
                            <div class="flex flex-wrap gap-2">
                                <button type="button" class="bg-yellow-400 duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer text-black text-xs px-5 py-2 rounded-md font-medium">
                                    Food
                                </button>
                                <button type="button" class="bg-yellow-400 duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer text-black text-xs px-5 py-2 rounded-md font-medium">
                                    Dress
                                </button>
                                <button type="button" class="bg-yellow-400 duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer text-black text-xs px-5 py-2 rounded-md font-medium">
                                    Shelter
                                </button>
                                <button type="button" class="bg-yellow-400 duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer text-black text-xs px-5 py-2 rounded-md font-medium">
                                    Education
                                </button>
                                <button type="button" class="bg-yellow-400 duration-500 hover:bg-yellow-700 hover:text-white cursor-pointer text-black text-xs px-5 py-2 rounded-md font-medium">
                                    Treatment
                                </button>
                            </div>
                        </div>
                        <!-- blog category -->

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- / portfolio -->

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
