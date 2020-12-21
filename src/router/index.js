// import Vue from 'vue';
// import Router from 'vue-router';
// // const begginerVue = require('../components/begginer.vue');
// // const HelloWorld = require('../components/HelloWorld.vue');
// // import HelloWorld from '../components/HelloWorld.vue'
// // import begginer from '../components/begginer.vue';

// Vue.use(Router);
// export default new Router({
//     routes:[
//         {
//             path:"/",
//             redirect: {
//                 name: "HelloWorld"
//             },
//             component:() => import('../components/HelloWorld.vue')
//         },
//         {
//             path:"/HelloWorld",
//             name:"HelloWorld",
//             component:() => import('../components/HelloWorld.vue')
//         },
//         {
//             path:"/begginer",
//             name:"begginer",
//             component:() => import('../components/begginer.vue')
//         }
//     ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import begginer from '@/components/begginer'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      props:true
    },
    {
      path:'/begginer',
      name:'begginer',
      component:begginer,
      props:true
    }
  ]
})