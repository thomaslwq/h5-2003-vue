export default[
    {
        path: '/customer',
        component: () => import ('../views/Customer/Customer.vue'),
        name: 'customer',
    },
    {
        path: '/customer/behavior',
        component: () => import ('../views/Customer/Behavior.vue'),
        name: 'behavior',
    },
    {
        path: '/customer/evaluate',
        component: () => import ('../views/Customer/Evaluate.vue'),
        name: 'evaluate',
    }
]
