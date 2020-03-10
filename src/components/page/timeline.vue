<template>
  <div class="timeline">
    <h2><span>TimeLine</span> <span class="chinese">时间轴</span></h2>
    <p>S形时间轴. CSS组件</p>
    <div class="preview clearfix">
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['pic', 'del', 'txt', 'ok', 'warn', 'error', 'bar', 'plus', 'bilibili', 'github', 'trash', 'copy', 'html', 'sass', 'json', 'vue', 'left', 'right'],
      doc: [
        {property: 'type', description: '指定使用内置图标的代号(优先级低)', type: 'String', default: ''},
        {property: 'colors', description: '图标颜色(高优先级属性,用于多色图标和修改图标默认颜色)', type: 'Array', default: '[]'},
        {property: 'path', description: '图标轨迹', type: 'Array', default: ''},
        {property: 'view', description: 'viewBox', type: 'String', default: '0 0 1024 1024'}
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