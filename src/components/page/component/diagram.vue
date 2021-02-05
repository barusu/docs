<template>
  <div class="diagram">
    <h2><span>Diagram</span> <span class="chinese">关系图</span></h2>
    <p class="tip">需添加 d3.js 才可使用此组件. NPM等形式引入需挂载到全局变量 d3 中.</p>
    <p>功能添加中.</p>
    <xc-button effect="spread" type="primary" @click="diagramlineEdit = !diagramlineEdit">addline-{{diagramlineEdit}}</xc-button>
    <xc-button effect="spread" type="primary" @click="diagramEdit = !diagramEdit">diagramEdit-{{diagramEdit}}</xc-button>
    <p class="config-wrapper">
      <xc-input label="线条颜色" v-model="style.lineColor"></xc-input>
      <xc-input label="线条宽度" v-model="style.lineWidth"></xc-input>
      <br>
      <xc-input label="文字颜色" v-model="style.textColor"></xc-input>
      <xc-input label="文字大小" v-model="style.fontSize"></xc-input>
      <xc-input label="文字位置" v-model="style.fontOffset"></xc-input>
    </p>
    <div class="preview clearfix">
      <div class="nodelist">
        <list-node v-for="i in diagramData" :key="'l' + i.id" :data="i" @drag="drag"></list-node>
      </div>
      <xc-diagram ref="diagram" :data="diagramData" :line="diagramLine" height="400px" :option="defaultDiagramOption" :edit="diagramEdit" :lineEdit='diagramlineEdit' @lineSelect="lineSelect"></xc-diagram>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
import ListNode from './diagram-node';

export default {
  components: {
    ListNode
  },
  data() {
    return {
      doc: [
        {property: 'data', description: '树形数据', type: 'Object', default: ''},
        {property: 'type', description: '显示类型（flex & list）', type: 'String', default: 'flex'},
        {property: 'lineEdit', description: '关系线添加修改是否开启', type: 'Boolean', default: 'false'}
      ],
      diagramData: [
        {id: 1, name: '张三', url: 'http://localhost/img/test1.jpg'},
        {id: 2, name: '李四', url: 'http://localhost/img/test2.jpg'},
        {id: 3, name: '王五', url: 'http://localhost/img/test1.jpg'},
        {id: 4, name: '小六', url: 'http://localhost/img/test2.jpg'},
        {id: 5, name: '蚺祈', url: 'http://localhost/img/test1.jpg'},
        {id: 6, name: '森蚺', url: 'http://localhost/img/test2.jpg'}
      ],
      diagramLine: [
        {
          type: 'line',
          start: 1, end: 2,
          label: '测试',
          starthandle: [0, 0],
          endhandle: [0, 0],
          style: {
            lineColor: 'red', lineWidth: '1px',
            textColor: 'red', fontSize: '16px', fontOffset: '20%'
          }
        },
        {type: 'line', start: 1, end: 3},
        {type: 'line', start: 1, end: 4},
        {type: 'line', start: 1, end: 5},
        {type: 'line', start: 4, end: 6}
      ],
      defaultDiagramOption: {
        lineColor: 'coral', lineWidth: '2px',
        textColor: 'coral', fontSize: '16px', fontOffset: '50%'
      },
      diagramlineEdit: false,
      diagramEdit: true,
      line: null,
      style: {
        lineColor: 'coral', lineWidth: 2,
        textColor: 'coral', fontSize: 16, fontOffset: '50%'
      }
    };
  },
  watch: {
    style: {
      handler: function() {
        console.log('ee');
        if(this.line) {
          this.line.style.lineColor = this.style.lineColor;
          this.line.style.lineWidth = this.style.lineWidth + 'px';
          this.line.style.textColor = this.style.textColor;
          this.line.style.fontSize = this.style.fontSize + 'px';
          this.line.style.fontOffset = this.style.fontOffset;
        }
      },
      deep: true
    }
  },
  methods: {
    drag(e) {
      this.$refs.diagram.drag(e);
    },
    lineSelect(l) {
      if(l) {
        if(!l.style) l.style = {};
        this.style.lineColor = l.style.lineColor || '';
        this.style.lineWidth = parseInt(l.style.lineWidth);
        if(!(this.style.lineWidth > 0)) this.style.lineWidth = this.defaultDiagramOption.lineWidth;
        this.style.textColor = l.style.textColor || '';
        this.style.fontSize = parseInt(l.style.fontSize);
        if(!(this.style.fontSize > 11)) this.style.fontSize = this.defaultDiagramOption.fontSize;
        this.style.fontOffset = l.style.fontOffset || '';
      }
      this.line = l;
    }
  }
}
</script>

<style lang="scss">
  .diagram {
    .preview {
      padding-bottom: .18rem;
    }
    .config-wrapper {
      label {
        width: 30%;
        margin-top: 10px;
      }
    }
  }
</style>