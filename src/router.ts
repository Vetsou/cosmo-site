import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import TeamsView from './views/TeamsView.vue';
import NewsView from './views/NewsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/teams', component: TeamsView },
  { path: '/news', component: NewsView },

  { path: '/:pathMatch(.*)*', component: () => import('./views/error/NotFoundView.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;