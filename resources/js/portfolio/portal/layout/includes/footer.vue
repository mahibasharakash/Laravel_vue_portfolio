<template>

    <footer class="w-full bg-black/85 py-16">
        <div class="max-w-7xl mx-auto w-full px-5">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div class="py-5">
                    <div class="w-full block mb-1 text-white"> Phone </div>
                    <div class="w-full block mb-4">
                        <a href="tel:+8801400125289" class="text-sm text-white/65 duration-500 hover:text-white">
                            +880 01400125289
                        </a>
                    </div>
                    <div class="w-full block mb-1 text-white"> Email </div>
                    <div class="w-full block mb-4">
                        <a href="mailto:mahibashar2000002@gmail.com" class="text-sm text-white/65 duration-500 hover:text-white">
                            mahibashar2000002@gmail.com
                        </a>
                    </div>
                    <div class="w-full block mb-1 text-white"> Location </div>
                    <div class="w-full block mb-4">
                        <a href="https://www.google.com/maps/place/Dhanmondi,+Dhaka+1216,+Bangladesh" target="_blank" class="text-sm text-white/65 duration-500 hover:text-white">
                            Dhanmondi, Dhaka 1216, Bangladesh
                        </a>
                    </div>
                </div>
                <div class="py-5">
                    <div class="text-white text-xl mb-5"> Quick Link </div>
                    <div class="w-full block">
                        <a @click="scrollToSection('home')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            Home
                        </a>
                        <a @click="scrollToSection('about_us')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            About Us
                        </a>
                        <a @click="scrollToSection('services')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            Services
                        </a>
                        <a @click="scrollToSection('why_choose_us')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            Why Choose Us
                        </a>
                        <a @click="scrollToSection('team')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            Our Team
                        </a>
                        <a @click="scrollToSection('testimonial')" class="cursor-pointer text-sm text-white/65 duration-500 hover:text-white block mb-3">
                            Testimonial
                        </a>
                    </div>
                </div>
                <div class="py-5">
                    <div class="text-white text-xl mb-5"> Newsletter </div>
                    <form class="w-full grid grid-cols-1 gap-3">
                        <input type="text" name="newsletter" required autocomplete="off" class="min-h-[45px] max-h-[45px] text-sm w-full border-0 bg-white/15 text-white rounded-md py-2 px-4 outline-0 duration-500" placeholder="Enter Your Email" />
                        <div>
                            <button type="submit" class="min-h-[45px] max-h-[45px] cursor-pointer min-w-[120px] text-sm rounded-md py-2 px-4 text-white bg-emerald-600 hover:bg-emerald-900 duration-500"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>

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
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, null, ' ');
        },
        initSectionObserver() {
            const sections = document.querySelectorAll('section[id]');
            this.observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.currentSection = entry.target.id;
                        }
                    });
                },
                {
                    threshold: 0.5, // section visible at least 50%
                }
            );
            sections.forEach((sec) => this.observer.observe(sec));
        },
    }
}

</script>
