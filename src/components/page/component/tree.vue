<template>
  <div class="flextree">
    <h2><span>FlexTree</span> <span class="chinese">树形</span></h2>
    <p>功能添加中.</p>
    <div class="preview clearfix">
      <xc-flextree :data="flextreeData"></xc-flextree>
    </div>
    <h3><span>Attributes</span></h3>
    <xc-doc :list="doc"></xc-doc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doc: [
        {property: 'data', description: '树形数据', type: 'Object', default: ''}
      ],
      flextreeData: {
        "name": "如何学习D3",
        "children":
        [
          {
            "name": "预备知识",
            "children": [
              {"name": "HTML & CSS"},
              {"name": "JavaScript"},
              {"name": "DOM"},
              {"name": "SVG"},
              {"name": "test"}
            ]
          }, {
            "name": "安装",
            "_children": [
              {"name": "折叠节点"}
            ]
          }, {
            "name": "入门",
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
                  {"name": "散点图"}
                ]
              },
              {"name": "比例尺"},
              {"name": "生成器"},
              {"name": "过渡"}
            ],
            "left": true
          }, {
            "name": "进阶",
            "left": true
          }, {
            "name": "一级节点",
            "children": [
              {"name": "子节点1"},
              {"name": "子节点2"},
              {"name": "子节点3"}
            ]
          }
        ]
      }
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