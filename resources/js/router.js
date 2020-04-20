import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Pages from '@/pages/Pages'
import Posts from '@/pages/Posts/Index'
import PostsDetail from '@/pages/Posts/Detail'
import Categories from '@/pages/Categories'

Vue.use(Router);

const About = { template: '<h1>bar</h1>' }
export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/posts',
                name: 'Posts',
                component: Posts
            },
            {
                path: '/posts/:slug',
                name: 'PostsDetail',
                component: PostsDetail
            },
            {
                path: '/Categories/:slug',
                name: 'Categories',
                component: Categories
            },
            {
                path: '/:slug',
                name: 'Pages',
                component: Pages
            },
        ]
    });
}