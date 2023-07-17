import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DoctorView from '../views/DoctorView.vue'
import PatientVIew from '../views/PatientVIew.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/doctorview',
    name: 'DoctorView',
    component: DoctorView
  },
  {
    path: '/patientview',
    name: 'PatientVIew',
    component: PatientVIew
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
