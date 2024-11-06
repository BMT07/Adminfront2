import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FounisseurDashboard from "../views/Founisseur/DashboardFournisseurView.vue"
import SalesDashboard from "../views/SalesAdmin/DashboardSalesView.vue"
import StockAdmin from "../views/StockAdmin/DashboardStockView.vue"
import FinnaceAdmin from '../views/Finnance/DashboardFinnanceView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/fournisseur",
    name:"Fournisseur",
    component:FounisseurDashboard
  },
  {
    path:"/SalesAdmin",
    name:"SalesAdmin",
    component:SalesDashboard
  },
  {
    path:"/FinnaceAdmin",
    name:"FinnaceAdmin",
    component:FinnaceAdmin
  },
  {
    path:"/StockAdmin",
    name:"StockAdmin",
    component:StockAdmin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
