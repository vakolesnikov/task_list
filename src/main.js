import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.config.productionTip;
Vue.use(VueRouter);

const router = new VueRouter({
   routes: [
       {
           path: '/:id',
           name: 'main',
           component: App
       },
   ]
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

