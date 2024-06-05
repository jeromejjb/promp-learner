import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LessonsView from '../views/Lessons.vue'
import PracticeView from '../views/Practice.vue'
import ResourcesView from '../views/Resources.vue'
import ProfileView from '../views/Profile.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'HomeView', component: HomeView },
  { path: '/lessons', name: 'LessonsView', component: LessonsView },
  { path: '/practice', name: 'PracticeView', component: PracticeView },
  { path: '/resources', name: 'ResourcesView', component: ResourcesView },
  { path: '/profile', name: 'ProfileView', component: ProfileView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
