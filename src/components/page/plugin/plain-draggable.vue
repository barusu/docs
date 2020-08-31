<template>
  <div class="plain-draggable-wrapper" ref="main">
    <div class="content" ref="content">
      <plain-draggable class="item">
        spantest
      </plain-draggable>
    </div>
  </div>
</template>

<script>
import plainDraggable from '../../extend/plain-draggable';

const d3 = window.d3;
const zoom = d3.zoom();

export default {
  components: {plainDraggable},
  data() {
    return {
      wrapper: null,
      content: null
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // this.update();
      this.wrapper = d3.select(this.$refs.main);
      this.content = d3.select(this.$refs.content);
      this.wrapper.call(zoom.on('zoom', () => {
        this.content.attr('style', `transform: translate(${d3.event.transform.x}px,${d3.event.transform.y}px) scale(${d3.event.transform.k})`);
      }))
    });
  }
}
</script>

<style lang="scss">
.plain-draggable-wrapper {
  position: relative;
  height: 400px;
  background-color: #f0f0f0;
  overflow: hidden;
  > .content {
    height: calc(100% + 2000px);
    width: calc(100% + 2000px);
    padding: 1000px;
    margin: -1000px;
    background-color: #fff;
  }
  .item {
    display: inline-block;
  }
}
</style>