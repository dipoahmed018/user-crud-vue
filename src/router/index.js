import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "../components/auth/AdminLogin.vue";
import UserLogin from "../components/auth/UserLogin.vue";
import UserDashboard from "../views/dashboard/User.vue";
import AdminDashboard from "../views/dashboard/Admin.vue";

const routes = [
  { path: '/', redirect: '/login/user' },
  { path: '/login/user', component: UserLogin },
  { path: '/login/admin', component: AdminLogin },
  { path: '/dashboard/user', component: UserDashboard },
  { path: '/dashboard/admin', component: AdminDashboard },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
