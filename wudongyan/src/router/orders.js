export default[
    {
        path: '/orders',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'oprocess',
    },
    {
        path: '/orders/property',
        component: () => import ('../views/Orders/PropertyCenter.vue'),
        name: 'ocenter',
    },
    {
        path: '/orders/process',
        component: () => import ('../views/Orders/OrderProcess.vue'),
        name: 'oprocess',
    },
    {
        path: '/orders/search',
        component: () => import ('../views/Orders/OrderSearch.vue'),
        name: 'osearch',
    },
    {
        path: '/orders/setting',
        component: () => import ('../views/Orders/OrderSetting.vue'),
        name: 'osetting',
    },
    {
        path: '/orders/reservation',
        component: () => import ('../views/Orders/Reservation.vue'),
        name: 'oreservation',
    }
    
]