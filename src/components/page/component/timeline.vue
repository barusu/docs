<template>
  <div class="timeline">
    <h2><span>TimeLine</span> <span class="chinese">时间轴</span></h2>
    <p>S形时间轴. CSS组件</p>
    <div class="preview clearfix">
      <xc-timeline :list="timelinedata" :fontsize="12"></xc-timeline>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
    <h3><span>Item Attributes</span></h3>
    <xc-doc :list="itemdoc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelinedata: [
        {id: 1, time: '2019-12-24', icon: 'vue', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我12r23sdfwsfwfew'},
        {id: 2, time: '2019-12-25', icon: 'sass', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 3, time: '2019-12-26', content: 'ewfwfwegerwwwwwwwww'},
        {id: 4, time: '2019-12-27', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 5, time: '2019-12-28', content: '放不放假被网警被伏击完全比既往不咎放不进去我'},
        {id: 6, time: '2019-12-29', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 7, time: '2019-12-30', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 8, time: '2019-12-31', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 9, time: '2020-01-01', content: '是的放v额大V健尔康奔溃被是额外VR饿就看软件氪玩家康复科烤漆房不对付首付款把握好将复何及客服和二号分别为将复何及额外加号放我'},
        {id: 10, time: '2020-01-02', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 11, time: '2020-01-03', content: '是的放v额大V健尔康奔溃被是额外VR饿就看软件氪玩家康复科烤漆房不对付首付款把握好将复何及客服和二号分别为将复何及额外加号放我'},
        {id: 12, time: '2020-01-04', content: '是的放v额大V健尔康奔溃被是额外VR饿就看软件氪玩家康复科烤漆房不对付首付款把握好将复何及客服和二号分别为将复何及额外加号放我'},
        {id: 13, time: '2020-01-05', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 14, time: '2020-01-06', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 15, time: '2020-01-07', content: '缩放皇家哈鸡儿结尾那段能外发就我房间我'},
        {id: 16, time: '2020-01-08', content: '是的放v额大V健尔康奔溃被是额外VR饿就看软件氪玩家康复科烤漆房不对付首付款把握好将复何及客服和二号分别为将复何及额外加号放我'},
        {id: 17, time: '2020-01-09', content: 'qwqwq'}
      ],
      list: ['pic', 'del', 'txt', 'ok', 'warn', 'error', 'bar', 'plus', 'bilibili', 'github', 'trash', 'copy', 'html', 'sass', 'json', 'vue', 'left', 'right'],
      doc: [
        {property: 'count', description: '单行显示的个数', type: 'Number', default: '4'},
        {property: 'fontsize', description: '内容文字字体（px）', type: 'Number', default: '12'},
        {property: 'list', description: '数据列表', type: 'Array', default: '[Object]'}
      ],
      itemdoc: [
        {property: 'id', description: '唯一标识', type: 'String/Number', default: ''},
        {property: 'time', description: '时间文本', type: 'String', default: ''},
        {property: 'content', description: '内容文本', type: 'String', default: ''},
        {property: 'icon', description: '图标(仅限内置图标)', type: 'String', default: ''},
        {property: 'img', description: '图片图标(待开发)', type: 'String', default: ''}
      ]
    };
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .timeline {
    .preview {
      padding-bottom: .18rem;
      .item {
        float: left;
        width: 10%;
        min-width: 60px;
        padding: 10px;
        color: #666;
        text-align: center;
        svg {
          height: 36px;
        }
        span {
          display: block;
          line-height: 2;
        }
      }
    }
  }
</style>