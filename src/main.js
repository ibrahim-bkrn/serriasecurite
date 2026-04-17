import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './views/HomePage.vue'
import SurveillanceHumainePage from './views/solutions/SurveillanceHumainePage.vue'
import ContactPage from './views/ContactPage.vue'
import FontsPreview from './views/FontsPreview.vue'
import ButtonPreview from './views/ButtonPreview.vue'
import DesignA from './views/designs/DesignA.vue'
import DesignB from './views/designs/DesignB.vue'
import DesignC from './views/designs/DesignC.vue'
import DesignD from './views/designs/DesignD.vue'
import DesignE from './views/designs/DesignE.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',                                  component: HomePage },
    { path: '/solutions/surveillance-humaine',    component: SurveillanceHumainePage },
    { path: '/contact',                           component: ContactPage },
    { path: '/design/a', component: DesignA },
    { path: '/design/b', component: DesignB },
    { path: '/design/c', component: DesignC },
    { path: '/design/d', component: DesignD },
    { path: '/design/e', component: DesignE },
    { path: '/fonts',    component: FontsPreview },
    { path: '/buttons',  component: ButtonPreview },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

const app = createApp(App)
app.use(router)
app.mount('#app')
