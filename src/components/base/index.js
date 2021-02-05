import Code from './code';
import Doc from './doc';
import Input from './input';

const install = function(Vue) {
  Vue.component('xcCode', Code);
  Vue.component('xcDoc', Doc);
  Vue.component('xcDoc', Doc);
  Vue.component('xcInput', Input);
};

export default {
  install
};