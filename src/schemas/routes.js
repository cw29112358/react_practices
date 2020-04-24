import Home from 'pages/home';
import Demo from 'pages/demo';
import Md from 'pages/Md';

export const routes = [
  {
    path: '/home',
    component: Home,
    icon: 'home',
    title: '首页',
  },
  {
    path: '/demo',
    component: Demo,
    icon: 'home',
    title: '示例',
  },
  {
    path: '/md',
    component: Md,
    icon: 'home',
    title: '练习',
  },
];
