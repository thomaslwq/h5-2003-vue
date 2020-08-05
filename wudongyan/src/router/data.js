export default[
    {
        path: '/datacenter',
        component: () => import ('../views/Data/DataCenter.vue'),
        name: 'DataCenetr',
    },
    {
        path: '/mkAnalytics',
        component: () => import ('../views/Data/MkAnalytics.vue'),
        name: 'mkAnalytics',
        children:[
        
        ]
    },
    {
        path: '/datadownload',
        component: () => import ('../views/Data/DataDownLoad.vue'),
        name: 'dataDownLoad',
        children:[
        
        ]
    },
    {
        path: '/recovery',
        component: () => import ('../views/Data/Recovery.vue'),
        name: 'recovery',
        children:[
        
        ]
    },
]