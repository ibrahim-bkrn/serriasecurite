import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './views/HomePage.vue'
import SurveillanceHumainePage    from './views/solutions/SurveillanceHumainePage.vue'
import SurveillanceMateriellePage from './views/solutions/SurveillanceMateriellePage.vue'
import VideoSurveillancePage      from './views/solutions/VideoSurveillancePage.vue'
import AlarmeAntiIntrusionPage    from './views/solutions/AlarmeAntiIntrusionPage.vue'
import AlarmeSitesInocupesPage    from './views/solutions/AlarmeSitesInocupesPage.vue'
import ProtectionPhysiquePage     from './views/solutions/ProtectionPhysiquePage.vue'
import ContactPage  from './views/ContactPage.vue'
import SecteursPage from './views/SecteursPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                                 component: HomePage },
    { path: '/solutions/surveillance-humaine',   component: SurveillanceHumainePage },
    { path: '/solutions/surveillance-materielle',component: SurveillanceMateriellePage },
    { path: '/solutions/protection-physique',    component: ProtectionPhysiquePage },
    { path: '/solutions/videosurveillance',      component: VideoSurveillancePage },
    { path: '/solutions/alarme-anti-intrusion',  component: AlarmeAntiIntrusionPage },
    { path: '/solutions/alarme-sites-inocupes',  component: AlarmeSitesInocupesPage },
    { path: '/contact',                          component: ContactPage },
    { path: '/secteurs',                         component: SecteursPage },
    { path: '/:pathMatch(.*)*',                  component: NotFoundPage },
  ],
  scrollBehavior: (to) => to.hash ? { el: to.hash, behavior: 'smooth' } : { top: 0 },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
