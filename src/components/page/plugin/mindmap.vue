<template>
  <div class="mindmap-page">
    <mindmap v-model="data" :height="500"></mindmap>
  </div>
</template>

<script>
import mindmap from '@hellowuxin/mindmap'

export default {
  components: {mindmap},
  data() {
    return {
      data: [{
        "name": "如何学习D3",
        "children":
        [
          {
            "name": "预备知识预备知识预备知识",
            "children": [
              {"name": "HTML & CSS"},
              {"name": "JavaScript"},
              {"name": "DOM"},
              {"name": "SVG"},
              {"name": "test"}
            ]
          },
          {
            "name": "安装",
            "_children": [
              {"name": "折叠节点"}
            ]
          }
        ]
      }]
    };
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss">
.mindmap-page {
  height: 500px;
}
</style>