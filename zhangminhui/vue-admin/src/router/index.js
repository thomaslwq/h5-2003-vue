import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/dashboard',
                    component: () => import('../components/page/Dashboard.vue'),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/userManage',
                    component: () => import('../components/page/BaseTable.vue'),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: '/productManage',
                    component: () => import('../components/page/Tabs.vue'),
                    meta: {
                        title: '商品管理'
                    }
                },
                {
                    path: '/colorManage',
                    component: () => import( '../components/page/BaseForm.vue'),
                    meta: {
                        title: '颜色管理'
                    }
                },
                {
                    path: '/matetialManage',
                    component: () => import( '../components/page/VueEditor.vue'),
                    meta: {
                        title: '材料管理'
                    }
                },
                {
                    path: '/seriesManage',
                    component: () => import( '../components/page/Markdown.vue'),
                    meta: {
                        title: '系列管理'
                    }
                },
                {
                    path: '/sortManage',
                    component: () => import( '../components/page/Upload.vue'),
                    meta: {
                        title: '分类管理'
                    }
                },
                {
                    path: '/specificationManage',
                    component: () => import('../components/page/BaseCharts.vue'),
                    meta: {
                        title: '规则管理'
                    }
                },
                {
                    path: '/commetManage',
                    component: () => import( '../components/page/BaseCharts.vue'),
                    meta: {
                        title: '评论管理'
                    }

                }

            ]
        },
        {
            path: '/login',
            component: () => import( '../components/page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});