export default[
    {
        path: '/marketing',
        component: () => import ('../views/Marketing/Center.vue'),
        name: 'Center',
    },
    {
        path: '/marketing/activities',
        component: () => import ('../views/Marketing/Activities.vue'),
        name: 'Activies',
    },
    {
        path: '/marketing/center',
        component: () => import ('../views/Marketing/Center.vue'),
        name: 'Center',
    }

    
]