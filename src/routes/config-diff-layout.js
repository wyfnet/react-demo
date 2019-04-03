//适用于整个完站只有一种布局
import BlankLayout from '../layouts/BlankLayout';
import BasicLayout2 from '../layouts/BasicLayout-2';
import BasicLayout3 from '../layouts/BasicLayout-3';
import Home from '../pages/Home';
import Test2 from '../pages/Test2';
import NotFound from '../pages/404';

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        exact: true,
        name: '音乐',
        component: BasicLayout2,
        routes: [
          {
            path: '/',
            name: '首页',
            component: Home,
          },
        ]
      },
      {
        path: '/music',
        name: '音乐',
        component: BasicLayout2,
        routes: [
          {
            path: '/',
            name: '首页',
            component: Home,
          },
          {
            path: '/music/playlist',
            name: '歌单',
            component: Test2,
          },
        ]
      },
      {
        path: '/video',
        name: '视频',
        component: BasicLayout3,
        routes: [
          {
            path: '/',
            name: '首页',
            component: Home,
          },
          {
            path: '/video/scene',
            name: '现场',
            component: Test2,
          },
        ]
      },
      {
        component: NotFound,
      },
    ]
  }
];
