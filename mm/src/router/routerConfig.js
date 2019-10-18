import Loadable from 'react-loadable';

import Loading from '@/components/loading/loading';

//首页
const Index = Loadable({
    loader: () =>
        import ('@/views/index/index.jsx'),
    loading: Loading
});


//主页
const Home = Loadable({
    loader: () =>
        import ('@/views/index/home/home.jsx'),
    loading: Loading
});


//登陆
const Login = Loadable({
    loader: () =>
        import ('@/views/login/login.jsx'),
    loading: Loading
});

//注册
const Register = Loadable({
    loader: () =>
        import ('@/views/register/register.jsx'),
    loading: Loading
});


//投票
const Vote = Loadable({
    loader: () =>
        import ('@/views/vote/vote.jsx'),
    loading: Loading
});

//开始投票
const StartVote = Loadable({
    loader: () =>
        import ('@/views/startVote/startVote.jsx'),
    loading: Loading
});

//详情
const Detail = Loadable({
    loader: () =>
        import ('@/views/detail/detail.jsx'),
    loading: Loading
});




const routes = [{
        path: '/index',
        children: [{
            path: '/index/home',
            component: Home
        }],
        component: Index

    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/vote',
        component: Vote
    },
    {
        path: '/startVote',
        component: StartVote
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/register',
        component: Register
    },
    {
        from: '/',
        to: '/index/home'
    }


]

export default routes;