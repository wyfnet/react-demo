//适用于整个完站只有一种布局
import BasicLayout from '../layouts/BasicLayout-2';
import Home from '../pages/Home';
import Test2 from '../pages/Test2';
import NotFound from '../pages/404';

export default [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        name: '首页',
        component: Home,
      },
      {
        path: '/playlist',
        name: '歌单',
        component: Test2,
      },
      {
        path: '/album',
        name: '专辑',
        component: Test2,
      },
      {
        path: '/singer',
        name: '歌手',
        component: Test2,
      },
      {
        component: NotFound,
      },
    ]
  }
];
