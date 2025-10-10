<template>

    <section class="w-full bg-cover object-cover relative before:absolute before:content-[''] before:inset-0 before:w-full before:h-full before:bg-black/65 before:backdrop-blur-sm" :style="{ backgroundImage: 'url(/blog/breadcrumb.jpg)' }">
        <div class="mx-auto w-full max-w-7xl min-h-[250px] max-h-[250px] flex justify-center items-center flex-col gap-3 relative">
            <div class="text-xl text-white"> User Post </div>
            <div class="inline-flex justify-center items-center gap-5">
                <RouterLink :to="{name:'blog_portal_home'}" class="inline-block decoration-0 text-white text-sm">
                    Home
                </RouterLink>
                <div class="w-0.5 h-3.5 bg-white rotate-30"></div>
                <RouterLink :to="{name:'blog_user_post'}" class="inline-block decoration-0 text-white text-sm">
                    User Post
                </RouterLink>
            </div>
        </div>
    </section>

    <section class="w-full py-16">
        <div class="w-full mx-auto max-w-7xl px-10">

            <!-- header -->
            <div class="w-full flex flex-wrap justify-between mb-10">
                <div class=" w-full max-w-[360px]">
                    <div class="relative w-full">
                        <input type="text" name="" placeholder="Search Here" class="w-full block border border-gray-200 bg-gray-200 placeholder-black text-sm outline-0 px-5 min-h-[48px] max-h-[48px] rounded-md ring-0 focus-within:ring-4 ring-emerald-500 duration-500" required autocomplete="off" />
                        <div class="absolute top-0 bottom-0 start-0">

                        </div>
                    </div>
                </div>
                <div class="">
                    <button type="button" class="min-h-[48px] max-h-[48px] px-6 bg-green-600 duration-500 hover:bg-green-800 cursor-pointer text-sm text-white rounded-md">
                        New
                    </button>
                </div>
            </div>
            <!-- / header -->

            <!-- body -->
            <div class="w-full">

                <template v-if="tableData.length > 0">
                    <!-- no data found -->
                    <div class="w-full border border-gray-200 bg-gray-100 min-h-[calc(100vh-350px)] max-h-[calc(100vh-350px)] flex justify-center items-center flex-col">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                        </div>
                        <div class="font-semibold mb-1"> No Data Founded </div>
                        <div class="font-semibold text-xs opacity-85"> Click in "<button type="button" class="cursor-pointer p-0 m-0">New</button>" to add new data </div>
                    </div>
                    <!-- / no data found -->
                </template>

                <template v-if="loading">
                    <!-- loading -->
                    <div class="w-full border border-gray-200 bg-gray-100 min-h-[calc(100vh-350px)] max-h-[calc(100vh-350px)] flex justify-center items-center">
                        <span class="inline-block w-[55px] h-[55px] rounded-full border-2 border-green-500 border-t-transparent animate-spin"></span>
                    </div>
                    <!-- / loading -->
                </template>

                <template v-if="tableData.length > 0">

                </template>
                <!-- data list -->
                <div class="w-full border border-gray-200 bg-gray-100 min-h-[calc(100vh-350px)] max-h-[calc(100vh-350px)] overflow-y-auto">
                    <table class="table table-auto w-full">
                        <thead class="w-full">
                            <tr class="w-full">
                                <th class="max-w-[100px] min-w-[100px] text-start px-5 py-2 text-sm font-medium"> Name </th>
                                <th class="max-w-[120px] min-w-[120px] text-start px-5 py-2 text-sm font-medium"> Email </th>
                                <th class="max-w-[120px] min-w-[120px] text-start px-5 py-2 text-sm font-medium"> Phone Address </th>
                                <th class="max-w-[150px] min-w-[150px] text-start px-5 py-2 text-sm font-medium"> Present Address </th>
                                <th class="max-w-[80px] min-w-[80px] text-start px-5 py-2 text-sm font-medium"> Action </th>
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            <tr class="w-full" v-for="(each, index) in 10" :key="index">
                                <td class="max-w-[100px] min-w-[100px] text-start px-5 py-2 text-xs font-medium">
                                    <div class="truncate">
                                        Mahi Bashar Akash
                                    </div>
                                </td>
                                <td class="max-w-[120px] min-w-[120px] text-start px-5 py-2 text-xs font-medium">
                                    <div class="truncate">
                                        mahibashar2023@gmail.com
                                    </div>
                                </td>
                                <td class="max-w-[120px] min-w-[120px] text-start px-5 py-2 text-xs font-medium">
                                    <div class="truncate">
                                        +880 01400125289
                                    </div>
                                </td>
                                <td class="max-w-[150px] min-w-[150px] text-start px-5 py-2 text-xs font-medium">
                                    <div class="truncate">
                                        Dhanmondi, Dhaka - 1216, Bangladesh
                                    </div>
                                </td>
                                <td class="max-w-[80px] min-w-[80px] text-start px-5 py-2 text-xs font-medium">
                                    <div class="flex items-center gap-2">
                                        <a class="cursor-pointer p-0 m-0 inline-block outline-0 decoration-0 text-gray-800" @click="openManageModal()">
                                            Edit
                                        </a>
                                        <a class="cursor-pointer p-0 m-0 inline-block outline-0 decoration-0 text-red-800" @click="openDeleteModal()">
                                            Delete
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- / data list -->

            </div>
            <!-- / body -->

            <!-- footer -->
            <div class="w-full mt-5">
                <div class="flex items-center justify-start gap-1.5">
                    <button type="button" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center cursor-pointer bg-green-100 hover:bg-green-800 text-green-950 hover:text-white duration-500 rounded-full text-sm font-medium">
                        1
                    </button>
                    <button type="button" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center cursor-pointer bg-green-100 hover:bg-green-800 text-green-950 hover:text-white duration-500 rounded-full text-sm font-medium">
                        2
                    </button>
                    <button type="button" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center cursor-pointer bg-green-100 hover:bg-green-800 text-green-950 hover:text-white duration-500 rounded-full text-sm font-medium">
                        3
                    </button>
                    <button type="button" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center cursor-pointer bg-green-100 hover:bg-green-800 text-green-950 hover:text-white duration-500 rounded-full text-sm font-medium">
                        4
                    </button>
                    <button type="button" class="min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] inline-flex justify-center items-center cursor-pointer bg-green-100 hover:bg-green-800 text-green-950 hover:text-white duration-500 rounded-full text-sm font-medium">
                        5
                    </button>
                </div>
            </div>
            <!-- / footer -->

        </div>
    </section>

    <section class="fixed inset-0 size-full grid sm:justify-center items-center duration-500 z-50 p-5 overflow-y-auto" :class="{ 'invisible bg-black/35': !isActiveManageModal, 'visible bg-black/65': isActiveManageModal }" @click="isActiveManageModal = false">

        <!-- card -->
        <aside class="bg-white rounded-xl w-full sm:max-w-[450px] sm:min-w-[450px] px-8 py-5 duration-500 origin-top" :class="{ 'translate-y-0 opacity-100': isActiveManageModal, '-translate-y-1/2 opacity-0': !isActiveManageModal }" @click.stop>

            <!-- form -->
            <form class="w-full block">

                <!-- header -->
                <div class="w-full flex justify-between items-center mb-3">
                    <div class="text-xl font-semibold">
                        Create Post
                    </div>
                    <button type="button" class="min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] bg-transparent duration-500 hover:bg-gray-200 rounded-full inline-flex justify-center items-center cursor-pointer" @click="closeManageModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <!-- / header -->

                <!-- body -->
                <div class="w-full block">

                    <!-- upload photo -->
                    <div class="mb-3 w-full block">
                        <label for="upload-photo" class="border font-medium border-gray-200 bg-gray-100 duration-500 overflow-hidden rounded-lg cursor-pointer hover:bg-gray-300 w-full min-h-[200px] max-h-[200px] text-sm text-center flex justify-center items-center flex-col">
                            <input type="file" name="image" id="upload-photo" hidden />
                            <span class="mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </span>
                            <span> Upload Photo <br/> ( max: 2048kb or 2MB ) </span>
                        </label>
                    </div>
                    <!-- / upload photo -->

                    <!-- select -->
                    <div class="mb-3 w-full block">
                        <label for="category_id" class="mb-2 w-full block text-sm font-medium"> Category </label>
                        <div class="w-full relative">
                            <select name="category_id" id="category_id" class="text-xs font-medium w-full border border-gray-100 bg-gray-100 block min-h-[48px] max-h-[48px] rounded-md outline-0 ring-0 focus-within:ring-3 ring-blue-400 duration-500 px-4 shadow-inner appearance-none cursor-pointer" autocomplete="off">
                                <option :value="null"> Select Category </option>
                            </select>
                            <div class="absolute top-0 bottom-0 end-0 pe-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- / select -->

                    <!-- title -->
                    <div class="mb-3 w-full block">
                        <label for="title" class="mb-2 w-full block text-sm font-medium"> Title </label>
                        <input id="title" type="text" name="title" class="text-xs font-medium w-full border border-gray-100 bg-gray-100 block min-h-[48px] max-h-[48px] rounded-md outline-0 ring-0 focus-within:ring-3 ring-blue-400 duration-500 px-4 shadow-inner" autocomplete="off" />
                    </div>
                    <!-- / title -->

                    <!-- description -->
                    <div class="mb-3 w-full block">
                        <label for="short_description" class="mb-2 w-full block text-sm font-medium"> Short Description </label>
                        <textarea name="short_description" id="short_description" class="text-xs font-medium w-full border border-gray-100 bg-gray-100 block rounded-md outline-0 ring-0 focus-within:ring-3 ring-blue-400 duration-500 p-4 shadow-inner" cols="30" rows="3" autocomplete="off"></textarea>
                    </div>
                    <!-- / description -->

                    <!-- description -->
                    <div class="mb-3 w-full block">
                        <label for="long_description" class="mb-2 w-full block text-sm font-medium"> Long Description </label>
                        <textarea name="long_description" id="long_description" class="text-xs font-medium w-full border border-gray-100 bg-gray-100 block rounded-md outline-0 ring-0 focus-within:ring-3 ring-blue-400 duration-500 p-4 shadow-inner" cols="30" rows="5" autocomplete="off"></textarea>
                    </div>
                    <!-- / description -->

                </div>
                <!-- / body -->

                <!-- footer -->
                <div class="w-full flex justify-end items-center gap-5">
                    <button type="button" class="min-w-[90px] max-w-[90px] font-medium cursor-pointer bg-gray-200 duration-500 hover:bg-gray-300 px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" @click="closeManageModal()">
                        Cancel
                    </button>
                    <button type="submit" class="min-w-[90px] max-w-[90px] font-medium cursor-pointer bg-green-600 duration-500 hover:bg-green-950 text-white px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" v-if="!manageLoading">
                        Create
                    </button>
                    <button type="button" class="min-w-[90px] max-w-[90px] font-medium cursor-pointer bg-green-600 duration-500 hover:bg-green-950 text-white px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" v-if="manageLoading">
                        <span class="inline-block rounded-full w-4 h-4 border-2 border-white border-t-transparent animate-spin"></span>
                    </button>
                </div>
                <!-- / footer -->

            </form>
            <!-- / form -->

        </aside>
        <!-- / card -->

    </section>
    <!-- / manage crud modal -->

    <!-- delete crud modal -->
    <section class="fixed inset-0 size-full grid sm:justify-center items-center duration-500 z-50 p-5 overflow-y-auto" :class="{ 'invisible bg-black/35': !isActiveDeleteModal, 'visible bg-black/65': isActiveDeleteModal }" @click="isActiveDeleteModal = false">

        <!-- card -->
        <aside class="bg-white rounded-xl w-full sm:max-w-[450px] sm:min-w-[450px] px-8 py-10 duration-500 origin-top" :class="{ 'translate-y-0 opacity-100': isActiveDeleteModal, '-translate-y-1/2 opacity-0': !isActiveDeleteModal }" @click.stop>

            <!-- form -->
            <form class="w-full block">

                <!-- header -->
                <div class="mb-3 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-17 h-17 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
                <!-- / header -->

                <!-- body -->
                <div class="mb-4 flex justify-center font-medium">
                    Are You Sure?
                </div>
                <!-- / body -->

                <!-- footer -->
                <div class="w-full flex justify-center items-center gap-5">
                    <button type="button" class="min-w-[110px] max-w-[110px] font-medium cursor-pointer bg-gray-200 duration-500 hover:bg-gray-300 px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" @click="closeDeleteModal()">
                        Cancel
                    </button>
                    <button type="submit" class="min-w-[110px] max-w-[110px] font-medium cursor-pointer bg-red-500 duration-500 hover:bg-red-700 text-white px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" v-if="!deleteLoading">
                        Confirm
                    </button>
                    <button type="button" class="min-w-[110px] max-w-[110px] font-medium cursor-pointer bg-red-500 duration-500 hover:bg-red-700 text-white px-8 text-xs rounded-md min-h-[48px] max-h-[48px] inline-flex justify-center items-center" v-if="deleteLoading">
                        <span class="inline-block rounded-full w-4 h-4 border-2 border-white border-t-transparent animate-spin"></span>
                    </button>
                </div>
                <!-- / footer -->

            </form>
            <!-- / form -->

        </aside>
        <!-- / card -->

    </section>
    <!-- / delete crud modal -->

</template>

<script>

export default {
    data() {
        return {
            loading: false,
            tableData: [],
            isActiveManageModal: false,
            isActiveDeleteModal: false,
            manageLoading: false,
            deleteLoading: false,
        }
    },
    mounted() {

    },
    methods: {

        openManageModal() {
            this.isActiveManageModal = true;
        },

        closeManageModal() {
            this.isActiveManageModal = false;
        },

        openDeleteModal() {
            this.isActiveDeleteModal = true;
        },

        closeDeleteModal() {
            this.isActiveDeleteModal = false;
        },

    }
}

</script>
