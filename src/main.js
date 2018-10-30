import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.config.productionTip;
Vue.use(VueRouter);

const router = new VueRouter({
   routes: [
       {path: '/main', component: App},
   ]
});


// new Vue({
//     render: h => h(App)
// }).$mount('#app');

new Vue({
    router
}).$mount('#app')

