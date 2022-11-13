import { createApp } from 'vue';
import popper from '@popperjs/core';
import 'bootstrap';
import './assets/scss/main.scss';
import App from './App.vue';
import router from './router';
import store from './store';

window.Popper = popper;

createApp(App).use(store).use(router).mount('#app');
