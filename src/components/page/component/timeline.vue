<template>
  <div class="timeline-view">
    <h2><span>TimeLine</span> <span class="chinese">时间轴</span></h2>
    <p>S形时间轴.</p>
    <div class="preview clearfix">
      <xc-button :type="multiple ? 'info' : 'error'" @click="multiple = !multiple">multiple</xc-button>
      <xc-timeline :list="timelinedata" @click="clickhandler" :fontsize="12" :count="4" :multiple="multiple" size="s"></xc-timeline>
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_timeline1" class="kakushi code-control-ck" checked>
        <div class="code-html full">
          <p class="code-head"><xc-icon type="vue"></xc-icon>  <label class="code-control" for="code_timeline1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="html" :code="data2" line="3"></xc-code>
        </div>
      </div>
    </div>
    <h3><span>Event</span></h3>
    <xc-doc :list="event" type="event"></xc-doc>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
    <h3><span>Item Attributes</span></h3>
    <xc-doc :list="itemdoc"></xc-doc>
    <div class="data-view">
      <div class="code-wrapper clearfix">
        <input type="checkbox" id="code_transfer_data1" class="kakushi code-control-ck" v-model="ck1">
        <div class="code-json full">
          <p class="code-head json"><xc-icon type="json"></xc-icon> Data <label class="code-control" for="code_transfer_data1">&lt;<span>/</span>&gt;</label></p>
          <xc-code lang="json" :code="data1" line="30"></xc-code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelinedata: [
        {id: 1, time: '2019年12月24日', title: '河北省唐山市Xx出租房', icon: 'bar', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 2, time: '2019年12月25日', title: '河北省唐山市Xx出租房', icon: 'plus', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 3, time: '2019年12月26日', title: '河北省唐山市Xx出租房', icon: 'txt', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 4, time: '2019年12月27日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 5, time: '2019年12月28日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 6, time: '2019年12月29日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 7, time: '2019年12月30日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 8, time: '2019年12月31日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 9, time: '2020年01月01日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 10, time: '2020-01-02', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 11, time: '2020-01-03', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 12, time: '2020-01-04', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 13, time: '2020-01-05', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 14, time: '2020-01-06', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 15, time: '2020-01-07', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 16, time: '2020-01-08', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
        {id: 17, time: '2020-01-09', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'}
      ],
      list: ['pic', 'del', 'txt', 'ok', 'warn', 'error', 'bar', 'plus', 'bilibili', 'github', 'trash', 'copy', 'html', 'sass', 'json', 'vue', 'left', 'right'],
      doc: [
        {property: 'count', description: '单行显示的个数', type: 'Number', default: '4'},
        {property: 'fontsize', description: '内容文字字体（px）', type: 'Number', default: '12'},
        {property: 'size', description: '尺寸（s & l）', type: 'String', default: 'l'},
        {property: 'multiple', description: '多选', type: 'Boolean', default: 'false'},
        {property: 'list', description: '数据列表(对象数组，对象属性见下表)', type: 'Array', default: '[Object]'}
      ],
      itemdoc: [
        {property: 'id', description: '唯一标识', type: 'String/Number', default: ''},
        {property: 'time', description: '时间文本', type: 'String', default: ''},
        {property: 'content', description: '内容文本', type: 'String', default: ''},
        {property: 'icon', description: '图标(仅限内置图标)', type: 'String', default: ''}
      ],
      event: [
        {eventName: 'click', description: '点击 / 选择项变更时（区域：点或时间）触发(取决于multiple属性)', callbackParamet: 'Object / Array'}
      ],
      ck1: true,
      ck2: false,
      multiple: false,
      data1: `[
  {id: 1, time: '2019年12月24日', title: '河北省唐山市Xx出租房', icon: 'bar', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 2, time: '2019年12月25日', title: '河北省唐山市Xx出租房', icon: 'plus', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 3, time: '2019年12月26日', title: '河北省唐山市Xx出租房', icon: 'txt', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 4, time: '2019年12月27日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 5, time: '2019年12月28日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 6, time: '2019年12月29日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 7, time: '2019年12月30日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 8, time: '2019年12月31日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 9, time: '2020年01月01日', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 10, time: '2020-01-02', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 11, time: '2020-01-03', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 12, time: '2020-01-04', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 13, time: '2020-01-05', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 14, time: '2020-01-06', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 15, time: '2020-01-07', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 16, time: '2020-01-08', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'},
  {id: 17, time: '2020-01-09', title: '河北省唐山市Xx出租房', content: '被告XX与被害人XX在XX发生口角遂产生报复XX的念头'}
]`,
      data2: `<xc-timeline :list="timelinedata" @click="clickhandler" :fontsize="12" :count="4" :multiple="multiple" size="s"></xc-timeline>`
    };
  },
  methods: {
    clickhandler(i) {
      console.log(i);
    }
  }
}
</script>

<style lang="scss">
  .timeline-view {
    padding: 20px;
  }
</style>