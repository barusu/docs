import Vue from 'vue';
import Router from 'vue-router';

import ComponentPage from '@/components/page/component';
import Component from '@/components/page/component/index';
import Transfer from '@/components/page/component/transfer';
import Icon from '@/components/page/component/icon';
import Button from '@/components/page/component/button';
import Mask from '@/components/page/component/mask';
import Calendar from '@/components/page/component/calendar';
import Message from '@/components/page/component/message';
import TimeLine from '@/components/page/component/timeline';

import PluginPage from '@/components/page/plugin';
import VueDragResiz from '@/components/page/plugin/vue-drag-resiz';
import LeaderLine from '@/components/page/plugin/leader-line';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/components',
      component: ComponentPage,
      children: [
        {path: '', name: 'components', component: Component},
        {path: 'transfer', name: 'transfer', component: Transfer},
        {path: 'icon', name: 'icon', component: Icon},
        {path: 'button', name: 'button', component: Button},
        {path: 'calendar', name: 'calendar', component: Calendar},
        {path: 'mask', name: 'mask', component: Mask},
        {path: 'message', name: 'message', component: Message},
        {path: 'timeline', name: 'timeline', component: TimeLine}
      ]
    }, {
      path: '/plugin',
      component: PluginPage,
      children: [
        {path: '', name: 'plugin', component: Component},
        {path: 'vue-drag-resiz', name: 'vue-drag-resiz', component: VueDragResiz},
        {path: 'leader-line', name: 'leader-line', component: LeaderLine}
      ]
    }, {
      path: '*',
      redirect: '/components'
    }
  ]
});
