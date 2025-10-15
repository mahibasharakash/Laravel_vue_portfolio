<template>

    <section class="w-full bg-cover object-cover relative before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-black/65 before:backdrop-blur-sm" :style="{ backgroundImage: 'url(/blog/breadcrumb.jpg)' }">
        <div class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> Post Details </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-3.5 bg-white rotate-30"></div>
                <RouterLink :to="{name:'blog_portal_post_details',params: {slug:1}}" class="inline-block decoration-0 text-white text-sm">
                    Post Details
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full py-16">
        <div class="max-w-7xl mx-auto w-full px-10">
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
                Latest New Brand Laptop
            </div>
            <div class="text-xs font-medium block px-6 pb-6">
                he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                <br/><br/>
                he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                <br/><br/>
                <q class="block p-5 border-s-2 border-s-green-700 bg-gray-200">he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra.</q>
                <br/><br/>
                he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                <br/><br/>
                he latest new brand laptop of 2025 is the Energizer EnergyBook Pro Ultra. It features a massive 192 Wh battery that delivers exceptional endurance, lasting up to seven days on standby. Designed for power users and professionals, it combines an 18-inch high-resolution display with a sleek, durable build. While not focused on gaming performance, it emphasizes efficiency, portability, and extended battery life—making it ideal for productivity and travel (though its battery size exceeds flight limits in some regions).
                <br/><br/>
                <span class="w-full flex flex-wrap gap-2 items-center">
                    <span>
                        tags:
                    </span>
                    <button type="button" class="outline-0 m-0 py-1.5 px-2.5 rounded-md text-xs inline-block cursor-pointer bg-green-100 duration-500 hover:bg-green-800 text-green-800 hover:text-white">
                        Food
                    </button>
                    <button type="button" class="outline-0 m-0 py-1.5 px-2.5 rounded-md text-xs inline-block cursor-pointer bg-green-100 duration-500 hover:bg-green-800 text-green-800 hover:text-white">
                        Dress
                    </button>
                    <button type="button" class="outline-0 m-0 py-1.5 px-2.5 rounded-md text-xs inline-block cursor-pointer bg-green-100 duration-500 hover:bg-green-800 text-green-800 hover:text-white">
                        Shelter
                    </button>
                    <button type="button" class="outline-0 m-0 py-1.5 px-2.5 rounded-md text-xs inline-block cursor-pointer bg-green-100 duration-500 hover:bg-green-800 text-green-800 hover:text-white">
                        Education
                    </button>
                    <button type="button" class="outline-0 m-0 py-1.5 px-2.5 rounded-md text-xs inline-block cursor-pointer bg-green-100 duration-500 hover:bg-green-800 text-green-800 hover:text-white">
                        Treatment
                    </button>
                </span>
            </div>
            <form class="bg-gray-100 p-7 max-w-[550px] rounded-xl">
                <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                    <div class="mb-4 w-full block">
                        <label for="name" class="block mb-2 w-full font-semibold text-gray-700 text-xs"> Name </label>
                        <input id="name" type="text" name="name" class="font-semibold outline-0 ring-0 duration-500 ring-green-600/75 px-5 focus-within:ring-2 w-full border border-gray-300 bg-white rounded-md block min-h-[48px] max-h-[48px]" required autocomplete="off" />
                    </div>
                    <div class="mb-4 w-full block">
                        <label for="email" class="block mb-2 w-full font-semibold text-gray-700 text-xs"> Email </label>
                        <input id="email" type="email" name="email" class="font-semibold outline-0 ring-0 duration-500 ring-green-600/75 px-5 focus-within:ring-2 w-full border border-gray-300 bg-white rounded-md block min-h-[48px] max-h-[48px]" required autocomplete="off" />
                    </div>
                    <div class="mb-4 w-full block col-span-1 sm:col-span-2">
                        <label for="subject" class="block mb-2 w-full font-semibold text-gray-700 text-xs"> Subject </label>
                        <input id="subject" type="text" name="subject" class="font-semibold outline-0 ring-0 duration-500 ring-green-600/75 px-5 focus-within:ring-2 w-full border border-gray-300 bg-white rounded-md block min-h-[48px] max-h-[48px]" required autocomplete="off" />
                    </div>
                </div>
                <div class="mb-4 w-full block">
                    <label for="message" class="block mb-2 w-full font-semibold text-gray-700 text-xs"> Message </label>
                    <textarea name="message" id="message" class="font-semibold outline-0 ring-0 duration-500 ring-green-600/75 px-5 py-4 focus-within:ring-2 w-full border border-gray-300 bg-white rounded-md block resize-none" cols="30" rows="3" required autocomplete="off" ></textarea>
                </div>
                <div class="w-full block">
                    <button type="submit" class="max-w-[120px] min-w-[120px] rounded-md bg-green-600 duration-500 hover:bg-green-800 text-white text-xs min-h-[48px] max-h-[48px] cursor-pointer">
                        Submit
                    </button>
                </div>
            </form>
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
