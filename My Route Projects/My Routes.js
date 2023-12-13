[
    {
          // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
        meta: {
          title: 'Tables'
        },
        path: '/tables',
        name: 'tables',
        component: () => import('@/views/TablesView.vue')
      },
      {
        meta: {
          title: 'Forms'
        },
        path: '/forms',
        name: 'forms',
        component: () => import('@/views/FormsView.vue')
      },
      {
        meta: {
          title: 'Profile'
        },
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/ProfileView.vue')
      },
      {
        meta: {
          title: 'Ui'
        },
        path: '/ui',
        name: 'ui',
        component: () => import('@/views/UiView.vue')
      },
      {
        meta: {
          title: 'Responsive layout'
        },
        path: '/responsive',
        name: 'responsive',
        component: () => import('@/views/ResponsiveView.vue')
      },
      {
        meta: {
          title: 'Login'
        },
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
      },
      {
        meta: {
          title: 'Error'
        },
        path: '/error',
        name: 'error',
        component: () => import('@/views/ErrorView.vue')
      }
]