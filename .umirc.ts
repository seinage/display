import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {path:'/bigScreen',component:'@/pages/BigScreen/big-screen'}
  ],
  fastRefresh: {},
});
