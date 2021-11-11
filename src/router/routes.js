
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', redirect: 'dashboard_v1' },
      { path: 'dashboard_v1', component: () => import('pages/dashboard_v1.vue') },
      { path: 'dashboard_v2', component: () => import('pages/dashboard_v2.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
