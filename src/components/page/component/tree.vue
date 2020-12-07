<template>
  <div class="flextree">
    <h2><span>FlexTree</span> <span class="chinese">树形</span></h2>
    <p>功能添加中.</p>
    <xc-button effect="spread" type="primary" @click="flextreetype = 'flex'">flex</xc-button>
    <xc-button effect="spread" type="primary" @click="flextreetype = 'list'">list</xc-button>
    <xc-button effect="spread" type="primary" @click="lineEdit = !lineEdit">addline-{{lineEdit}}</xc-button>
    <div class="preview clearfix" style="height: 400px">
      <xc-flextree :data="flextreeData" :type="flextreetype" :lineEdit="lineEdit"></xc-flextree>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
const treeData = {
  "name": "Root",
  "children":
  [
    {
      "name": "类别",
      title: "类别注释",
      "children": [
        {"name": "HTML & CSS"},
        {"name": "JavaScript"},
        {"name": "DOM"},
        {"name": "SVG"}
      ]
    }, {
      "name": "折叠",
      "_children": [
        {"name": "折叠节点"}
      ]
    },
    {
      "name": "基础",
      "children": [
        {"name": "选择集"},
        {"name": "test"},
        {"name": "绑定数据"},
        {"name": "添加删除元素"},
        {
          "name": "简单图形",
          "children":
          [
            {"name": "柱形图"},
            {"name": "折线图"},
            {"name": "散点图"}]
        },
        {"name": "比例尺"},
        {"name": "生成器"},
        {"name": "过渡"}
      ],
      "left": true
    },
    {
      "name": "进阶",
      "left": true
    },
    {
      "name": "一级节点",
      "children": [
        {"name": "子节点1"},
        {"name": "子节点2"},
        {"name": "子节点3"}
      ]
    }
  ]
};
export default {
  data() {
    return {
      doc: [
        {property: 'data', description: '树形数据', type: 'Object', default: ''},
        {property: 'type', description: '显示类型（flex & list）', type: 'String', default: 'flex'},
        {property: 'lineEdit', description: '关系线添加修改是否开启', type: 'Boolean', default: 'false'}
      ],
      flextreeData: treeData,
      flextreetype: 'flex',
      lineEdit: false
    };
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .flextree {
    .preview {
      padding-bottom: .18rem;
    }
  }
</style>