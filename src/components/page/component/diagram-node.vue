<template>
  <div ref="dom" class="list-node-item">
    <img :src="data.url" alt="" width="50px">
    <div class="copydom" ref="drag">
      <img :src="data.url" alt="" width="50px">
    </div>
  </div>
</template>

<script>
const d3 = window.d3;

export default {
  name: 'DiagramNode',
  props: ['data'],
  data() {
    return {
      content: null,
      item: null,
      draggable: null,
      zoom: d3 && d3.zoom().scaleExtent([1, 1]) || null
    };
  },
  methods: {
    opendraggable() {
      this.content.call(this.zoom.on('zoom', () => {
        this.transform = d3.event.transform.x + ':' + d3.event.transform.y;
        this.item.attr('style', `transform: translate(${d3.event.transform.x}px,${d3.event.transform.y}px)`);
      }).on('end', () => {
        if(d3.event.transform.x || d3.event.transform.y) {
          this.$emit('drag', [this.$refs.dom, this.data, d3.event.transform.x, d3.event.transform.y]);
          this.zoom.transform(this.content, d3.zoomIdentity.scale(1));
        }
      }));
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.content = d3.select(this.$refs.dom);
      this.item = d3.select(this.$refs.drag);
      this.opendraggable();
    });
  }
}
</script>

<style lang="scss">
.list-node-item {
  position: relative;
  display: inline-block;
  width: 60px;
  padding: 5px;
  margin: 0 5px 5px 0;
  background-color: #fff;
  box-shadow: 1px 1px 2px #aaa;
  .copydom {
    position: absolute;
    top: 0; left: 0;
    background: #fff;
    padding: 5px;
    box-shadow: 1px 1px 2px #aaa;
  }
  img {
    display: block;
  }
}
</style>