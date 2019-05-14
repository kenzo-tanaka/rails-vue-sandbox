import Vue from 'vue/dist/vue.esm.js'
import Header from './components/header.vue'
import About from './components/about.vue'


var app = new Vue({
    el: '#app',
    components: {
        'navbar': Header,
        'about': About,
    }
})