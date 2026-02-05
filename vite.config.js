const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                programs: resolve(__dirname, 'programs.html'),
                schedule: resolve(__dirname, 'schedule.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
})
