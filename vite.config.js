import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/blog/app.js',
                'resources/js/chat-application/app.js',
                'resources/js/ecommerce/app.js',
                'resources/js/hospital/app.js',
                'resources/js/learning-management/app.js',
                'resources/js/portfolio/app.js',
            ],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
    ],
});
