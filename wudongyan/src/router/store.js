export default[
    {
        path: '/store',
        component: () => import ('../views/Store/StoreInfo.vue'),
        name: 'StoreInfo',
    },
    {
        path: '/store/info',
        component: () => import ('../views/Store/StoreInfo.vue'),
        name: 'StoreInfo',
    }
]