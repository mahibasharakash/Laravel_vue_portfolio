<template>

    <!-- hero section -->
    <section id="home" class="w-full relative z-5">

        <!-- slider -->
        <img :src="'/images/slider-background.jpg'" class="w-full object-cover bg-cover min-h-[650px] max-h-[650px]" alt="slider" />
        <!-- / slider -->

        <!-- content -->
        <div class="w-full px-5 h-full absolute inset-0 flex justify-center items-center flex-col bg-black/75 z-5">

            <!-- title -->
            <div class="text-white text-2xl lg:text-4xl max-w-[500px] leading-[50px] text-center">
                Digital <span class="text-amber-500"> Marketing </span> Agency
            </div>
            <!-- / title -->

            <!-- description -->
            <div class="text-md text-center text-white max-w-[850px] leading-[35px] mt-5">
                Welcome to Jonopod It Office, a results-driven digital marketing agency specializing in SEO, social media, content marketing, and paid ads. We help brands grow their online presence, reach the right audience, and achieve measurable success.
            </div>
            <!-- / description -->

        </div>
        <!-- content -->

    </section>
    <!-- / hero section -->

    <!-- about section -->
    <section id="about_us" class="w-full bg-white">
        <div class="px-5 max-w-7xl mx-auto w-full flex flex-wrap items-center">
            <div class="w-full lg:w-3/6 py-16 flex justify-center">

                <!-- image -->
                <div class="relative max-w-[570px] md:min-w-[570px]">
                    <img :src="'/images/about-img-1.webp'" class="object-cover bg-cover max-w-[360px] min-h-[570px] rounded-2xl" alt="about-image" />
                    <div class="absolute top-40 end-30">
                        <img :src="'/images/about-img-2.webp'" class="object-cover bg-cover max-w-[250px] h-auto rounded-2xl" alt="about-image" />
                    </div>
                </div>
                <!-- / image -->

            </div>
            <div class="w-full lg:w-3/6 py-10">

                <!-- breadcrumb text -->
                <div class="flex justify-start items-center font-medium">
                    <div class="min-w-[35px] min-h-[3px] bg-amber-500"></div>
                    <div class="ms-3 text-amber-600"> About Company </div>
                </div>
                <!-- / breadcrumb text -->

                <!-- title -->
                <div class="text-2xl lg:text-4xl font-semibold mt-5 leading-12">
                    We make Growth plane for Digital Marketing
                </div>
                <!-- / title -->

                <!-- description text -->
                <div class="my-5 w-full leading-8 text-md">
                    We create smart digital marketing growth plans that help businesses boost visibility, attract the right audience, and achieve long-term success online.
                </div>
                <!-- / description text -->

            </div>
        </div>
    </section>
    <!-- / about section -->

    <!-- count section -->
    <section class="w-full bg-white">
        <div class="px-5 max-w-7xl mx-auto w-full flex flex-wrap items-center text-center" ref="countSection">
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 py-10">

                <!-- count number -->
                <div class="text-2xl lg:text-4xl mb-3"> {{ clients }} </div>
                <!-- / count number -->

                <!-- count text -->
                <div class="font-medium text-gray-600 text-xs"> Happy Clients Worldwide </div>
                <!-- / count text -->

            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 py-10">

                <!-- count number -->
                <div class="text-2xl lg:text-4xl mb-3"> {{ projects }} </div>
                <!-- / count number -->

                <!-- count text -->
                <div class="font-medium text-gray-600 text-xs"> Projects Completed </div>
                <!-- / count text -->

            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 py-10">

                <!-- count number -->
                <div class="text-2xl lg:text-4xl mb-3"> {{ designers }} </div>
                <!-- / count number -->

                <!-- count text -->
                <div class="font-medium text-gray-600 text-xs"> Creative Experts </div>
                <!-- / count text -->

            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 py-10">

                <!-- count number -->
                <div class="text-2xl lg:text-4xl mb-3"> {{ awards }} </div>
                <!-- / count number -->

                <!-- count text -->
                <div class="font-medium text-gray-600 text-xs"> Awards Won </div>
                <!-- / count text -->

            </div>
        </div>
    </section>
    <!-- / count section -->

    <!-- services section -->
    <section id="services" class="w-full bg-gray-100">
        <div class="px-5 max-w-7xl mx-auto w-full py-16">

            <!-- breadcrumb text -->
            <div class="flex justify-center items-center font-medium">
                <div class="min-w-[35px] min-h-[3px] bg-amber-500"></div>
                <div class="ms-3 text-amber-600"> Our Solutions </div>
            </div>
            <!-- / breadcrumb text -->

            <!-- title -->
            <div class="text-center mt-5 text-2xl lg:text-4xl font-semibold">
                Solution we offer you
            </div>
            <!-- / title -->

            <!-- description text -->
            <div class="my-5 w-full leading-8 text-md mx-auto max-w-[650px] text-center">
                We craft experiences that keep your customers engaged and coming back. Our creative strategies make every interaction count.
            </div>
            <!-- / description text -->

            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> Consultancy </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Expert guidance to optimize your business growth and digital presence, ensuring measurable results. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> Web Development </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Build scalable websites that reach audiences worldwide, offering seamless omnichannel experiences. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> Content Writing </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Engaging content tailored to your audience, using best practices to boost visibility and conversions. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> Creative Design </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Eye-catching designs that reflect your brand identity, from visuals to UX/UI, making your brand unforgettable. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> SEO </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Optimize your online presence to rank higher on search engines and attract the right customers. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

                <!-- service -->
                <div class="w-full p-10 bg-white shadow-none hover:shadow-2xl cursor-pointer duration-500 rounded-md">

                    <!-- icon -->
                    <div class="mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor" class="max-w-10 min-w-10 max-h-10 min-h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <!-- title -->
                    <div class="text-xl mb-3 font-semibold text-amber-600"> Digital Marketing </div>
                    <!-- / title -->

                    <!-- description text -->
                    <div class="text-sm leading-6 text-gray-600"> Comprehensive marketing strategies across channels, including social media, email, and paid campaigns, to grow your business. </div>
                    <!-- / description text -->

                </div>
                <!-- / service -->

            </div>
        </div>
    </section>
    <!-- / services section -->

    <!-- why choose us section -->
    <section id="why_choose_us" class="w-full bg-white">
        <div class="px-5 max-w-7xl mx-auto w-full py-16 flex flex-wrap">
            <div class="w-full lg:w-1/2">

                <!-- breadcrumb text -->
                <div class="flex justify-start items-center font-medium">
                    <div class="min-w-[35px] min-h-[3px] bg-amber-500"></div>
                    <div class="ms-3 text-amber-600"> Why Choose Us </div>
                </div>
                <!-- / breadcrumb text -->

                <!-- title -->
                <div class="my-5 text-2xl lg:text-4xl font-semibold">
                    We deliver results-driven solutions tailored to your business growth.
                </div>
                <!-- / title -->

                <div class="flex justify-start items-center gap-5 mb-3 group">

                    <!-- icon -->
                    <div class="min-w-[105px] max-w-[105px] min-h-[105px] max-h-[105px] border border-gray-200 inline-flex justify-center items-center bg-white shadow-sm rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="animate-none group-hover:animate-pulse duration-500 min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <div>

                        <!-- title -->
                        <div class="text-xl mb-2 font-semibold text-amber-600"> User Friendly </div>
                        <!-- / title -->

                        <!-- description -->
                        <div class="text-sm mb-2 leading-6 text-gray-600"> Our strategies and platforms are simple, intuitive, and easy for your audience to engage with. </div>
                        <!-- / description -->

                    </div>
                </div>

                <div class="flex justify-start items-center gap-5 mb-3 group">

                    <!-- icon -->
                    <div class="min-w-[105px] max-w-[105px] min-h-[105px] max-h-[105px] border border-gray-200 inline-flex justify-center items-center bg-white shadow-sm rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="animate-none group-hover:animate-pulse duration-500 min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <div>

                        <!-- title -->
                        <div class="text-xl mb-2 font-semibold text-amber-600"> Trusted & Secured </div>
                        <!-- / title -->

                        <!-- description -->
                        <div class="text-sm mb-2 leading-6 text-gray-600"> We handle your brand and data with the highest level of security and reliability. </div>
                        <!-- / description -->

                    </div>

                </div>

                <div class="flex justify-start items-center gap-5 mb-3 group">

                    <!-- icon -->
                    <div class="min-w-[105px] max-w-[105px] min-h-[105px] max-h-[105px] border border-gray-200 inline-flex justify-center items-center bg-white shadow-sm rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="animate-none group-hover:animate-pulse duration-500 min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <!-- / icon -->

                    <div>

                        <!-- title -->
                        <div class="text-xl mb-2 font-semibold text-amber-600"> 24/7 Fast Support </div>
                        <!-- / title -->

                        <!-- description -->
                        <div class="text-sm mb-2 leading-6 text-gray-600"> Our team is always ready to assist you—anytime, anywhere, to keep your campaigns running smoothly. </div>
                        <!-- / description -->

                    </div>

                </div>

            </div>
            <div class="w-full lg:w-1/2">
                <div class="w-full relative">

                    <!-- choose 2 image -->
                    <div class="flex justify-center items-center">
                        <img :src="'/images/choose-1.webp'" class="object-cover bg-cover max-w-[180px] sm:max-w-[260px] w-full h-auto p-2" alt="choose-1" />
                        <img :src="'/images/choose-2.webp'" class="object-cover bg-cover max-w-[180px] sm:max-w-[260px] w-full h-auto p-2" alt="choose-2" />
                    </div>
                    <!-- / choose 2 image -->

                    <!-- choose 1 image -->
                    <div class="flex justify-center items-center">
                        <img :src="'/images/choose-3.webp'" class="object-cover bg-cover max-w-[180px] sm:max-w-[260px] w-full h-auto p-2" alt="choose-1" />
                    </div>
                    <!-- choose 1 image -->

                    <!-- play button -->
                    <div class="absolute inset-0 w-full h-full flex justify-center items-center">
                        <button type="button" class="min-w-[65px] max-w-[65px] min-h-[65px] max-h-[65px] inline-flex justify-center items-center outline-0 border-0 bg-amber-600 text-white rounded-full cursor-pointer relative before:absolute before:inset-0 before:w-full before:h-full before:ring-10 before:ring-white/75 before:animate-pulse before:rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <!-- / play button -->

                </div>
            </div>
        </div>
    </section>
    <!-- / why choose us section -->

    <!-- creative portfolio section -->
    <section id="team" class="w-full bg-gray-100">
        <div class="px-5 max-w-7xl mx-auto w-full py-16">

            <!-- breadcrumb text -->
            <div class="flex justify-center items-center font-medium">
                <div class="min-w-[35px] min-h-[3px] bg-amber-500"></div>
                <div class="ms-3 text-amber-600"> Our Team </div>
            </div>
            <!-- / breadcrumb text -->

            <!-- title -->
            <div class="my-5 text-2xl lg:text-4xl font-semibold text-center">
                Solution we offer you
            </div>
            <!-- / title -->

            <!-- description text -->
            <div class="mt-5 mb-10 w-full leading-8 text-md mx-auto max-w-[750px] text-center">
                Meet our passionate team of digital experts, designers, and marketers dedicated to growing your brand and driving results that matter.
            </div>
            <!-- / description text -->

            <!-- portfolio -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

                <!-- portfolio column -->
                <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                    <!-- content -->
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
                        <div class="text-white opacity-100 p-8">
                            <div class="text-xl mb-2"> Chief Executive Officer </div>
                            <div class="text-sm"> Alamin </div>
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
                        <div class="text-white opacity-100 p-8">
                            <div class="text-xl mb-2"> Digital Marketing Manager </div>
                            <div class="text-sm"> Emon </div>
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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

                <!-- portfolio column -->
                <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                    <!-- content -->
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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

                <!-- portfolio column -->
                <a href="javascript:void(0)" class="w-full relative overflow-hidden rounded-xl group">

                    <!-- content -->
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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
                    <div class="absolute flex justify-start items-end inset-0 group-hover:opacity-100 w-full h-full bg-gradient-to-t scale-125 group-hover:scale-100 from-black to-white/25 opacity-0 duration-500">
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

            <!-- / portfolio -->

        </div>
    </section>
    <!-- / creative portfolio section -->

    <!-- testimonial section -->
    <section id="testimonial" class="w-full bg-white">
        <div class="px-5 max-w-7xl mx-auto w-full py-16">
            <div class="w-full">

                <div class="overflow-hidden min-h-[370px] max-h-[370px] relative">

                    <div class="duration-500 flex justify-center items-center absolute inset-0 w-full h-full" :class="{ 'top-0' : isContentText === 1, 'top-full' : isContentText !== 1 }">

                        <div class="w-full h-auto">

                            <!-- quote -->
                            <div class="flex justify-center mb-8">
                                <svg viewBox="0 0 16 16" class="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z" class="fill-amber-600"></path>
                                        <path d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z" class="fill-amber-600"></path>
                                    </g>
                                </svg>
                            </div>
                            <!-- / quote -->

                            <!-- description text -->
                            <div class="text-md mb-4 text-center mx-auto max-w-[700px] text-gray-600">
                                Working with Jonopod It Office has been a game-changer for our business. Our online traffic doubled in just three months, and their team made the whole process so smooth and stress-free!
                            </div>
                            <!-- / description text -->

                            <!-- author -->
                            <div class="text-xl text-center font-semibold mb-1">
                                Samantha Riza
                            </div>
                            <!-- / author -->

                            <!-- author designation -->
                            <div class="text-sm text-center font-medium text-gray-400">
                                CEO, Aliverr Expo
                            </div>
                            <!-- / author designation -->

                        </div>

                    </div>

                    <div class="duration-500 flex justify-center items-center absolute inset-0 w-full h-full" :class="{ 'top-0' : isContentText === 2, 'top-full' : isContentText !== 2 }">

                        <div class="w-full h-auto">

                            <!-- quote -->
                            <div class="flex justify-center mb-8">
                                <svg viewBox="0 0 16 16" class="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z" class="fill-amber-600"></path>
                                        <path d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z" class="fill-amber-600"></path>
                                    </g>
                                </svg>
                            </div>
                            <!-- / quote -->

                            <!-- description text -->
                            <div class="text-md mb-4 text-center mx-auto max-w-[700px] text-gray-600">
                                The creativity and strategy Jonopod It Office brought to our campaigns were next level. Their insights and hands-on approach helped us reach our target audience like never before.
                            </div>
                            <!-- / description text -->

                            <!-- author -->
                            <div class="text-xl text-center font-semibold mb-1">
                                Samantha Riza
                            </div>
                            <!-- / author -->

                            <!-- author designation -->
                            <div class="text-sm text-center font-medium text-gray-400">
                                CEO, Aliverr Expo
                            </div>
                            <!-- / author designation -->

                        </div>

                    </div>

                    <div class="duration-500 flex justify-center items-center absolute inset-0 w-full h-full" :class="{ 'top-0' : isContentText === 3, 'top-full' : isContentText !== 3 }">

                        <div class="w-full h-auto">

                            <!-- quote -->
                            <div class="flex justify-center mb-8">
                                <svg viewBox="0 0 16 16" class="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z" class="fill-amber-600"></path>
                                        <path d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z" class="fill-amber-600"></path>
                                    </g>
                                </svg>
                            </div>
                            <!-- / quote -->

                            <!-- description text -->
                            <div class="text-md mb-4 text-center mx-auto max-w-[700px] text-gray-600">
                                We’ve tried multiple agencies before, but none matched the professionalism and results of Jonopod It Office. Their SEO and social media strategies truly boosted our growth.
                            </div>
                            <!-- / description text -->

                            <!-- author -->
                            <div class="text-xl text-center font-semibold mb-1">
                                Samantha Riza
                            </div>
                            <!-- / author -->

                            <!-- author designation -->
                            <div class="text-sm text-center font-medium text-gray-400">
                                CEO, Aliverr Expo
                            </div>
                            <!-- / author designation -->

                        </div>

                    </div>

                </div>

                <!-- author group -->
                <div class="flex justify-center items-center gap-8 mt-10 min-h-[90px] max-h-[90px]">

                    <!-- team -->
                    <img :src="'/images/testimonial-author-1.webp'" @click="clickContent(1)" :class="{ 'max-w-[55px] max-h-[55px] min-w-[55px] min-h-[55px] ring-gray-300' : isContentText !== 1 , 'max-w-[75px] max-h-[75px] min-w-[75px] min-h-[75px] ring-yellow-700' : isContentText === 1 }" class="duration-500 cursor-pointer object-cover bg-cover rounded-full ring-5" alt="testimonial-author-1" />
                    <!-- / team -->


                    <!-- team -->
                    <img :src="'/images/testimonial-author-6.webp'" @click="clickContent(2)" :class="{ 'max-w-[55px] max-h-[55px] min-w-[55px] min-h-[55px] ring-gray-300' : isContentText !== 2 , 'max-w-[75px] max-h-[75px] min-w-[75px] min-h-[75px] ring-yellow-700' : isContentText === 2 }" class="duration-500 cursor-pointer object-cover bg-cover rounded-full ring-5" alt="testimonial-author-6" />
                    <!-- / team -->


                    <!-- team -->
                    <img :src="'/images/testimonial-author-7.webp'" @click="clickContent(3)" :class="{ 'max-w-[55px] max-h-[55px] min-w-[55px] min-h-[55px] ring-gray-300' : isContentText !== 3 , 'max-w-[75px] max-h-[75px] min-w-[75px] min-h-[75px] ring-yellow-700' : isContentText === 3 }" class="duration-500 cursor-pointer object-cover bg-cover rounded-full ring-5" alt="testimonial-author-7" />
                    <!-- / team -->

                </div>
                <!-- / author group -->

            </div>
        </div>
    </section>
    <!-- / testimonial section -->

</template>

<script>

export default {
    data() {
        return {
            clients: 0,
            projects: 0,
            designers: 0,
            awards: 0,
            target: {
                clients: 1200,
                projects: 1025,
                designers: 765,
                awards: 1001
            },
            isContentText: 2,
        }
    },
    mounted() {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    this.animateCounts();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(this.$refs.countSection);
    },
    methods: {
        animateCounts() {
            this.animateValue("clients", 0, this.target.clients, 2000);
            this.animateValue("projects", 0, this.target.projects, 2000);
            this.animateValue("designers", 0, this.target.designers, 2000);
            this.animateValue("awards", 0, this.target.awards, 2000);
        },
        animateValue(key, start, end, duration) {
            let startTime = null;
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                this[key] = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        },
        clickContent(tab) {
            this.isContentText = tab;
        }
    }
}

</script>
