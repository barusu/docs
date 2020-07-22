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
import VueDragResize from '@/components/page/plugin/vue-drag-resize';
import ListPlainDraggable from '@/components/page/plugin/list-plain-draggable';
import LeaderLine from '@/components/page/plugin/leader-line';
// import MindMap from '@/components/page/plugin/mind-map';
import MindMap from '@/components/page/plugin/mindmap';

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
        {path: 'vue-drag-resize', name: 'vue-drag-resize', component: VueDragResize},
        {path: 'list-plain-draggable', name: 'list-plain-draggable', component: ListPlainDraggable},
        {path: 'mind-map', name: 'mind-map', component: MindMap},
        {path: 'leader-line', name: 'leader-line', component: LeaderLine}
      ]
    }, {
      path: '*',
      redirect: '/components'
    }
  ]
});
