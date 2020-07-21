<template>
  <div class="leader-line-page">
    <VueDragResize v-for="i in boxs" :key="i.id" :isActive="i.ac" :w="i.w" :h="i.h" :x="i.x" :y="i.y" @activated="set(i)" @deactivated="unset(i)" v-on:resizing="resize" v-on:dragging="resize" :parentLimitation="true" :style="{'background': i.bg}">
      <div :id="'box' + i.id" class=""></div>
    </VueDragResize>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';
import Line from './leader-line.js';

export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      boxs: [
        {id: 1, ac: false, w: 100, h: 200, x: 30, y: 30, bg: '#fc605d'},
        {id: 2, ac: false, w: 240, h: 100, x: 130, y: 230, bg: '#fdbc40'},
        {id: 3, ac: false, w: 200, h: 300, x: 430, y: 130, bg: '#34c849'},
        {id: 4, ac: false, w: 500, h: 20, x: 230, y: 330, bg: '#d08ce0'}
      ],
      line: null
    };
  },
  methods: {
    set(i) {
      this.boxs.forEach(b => {
        if(b.id == i.id) b.ac = true;
        else b.ac = false;
      });
    },
    unset(i) {
      i.ac = false;
      console.log(i);
    },
    resize() {
      this.$nextTick(() => {
        this.line.position();
      });
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // eslint-disable-next-line no-undef
      this.line = new Line(
        document.getElementById('box1'),
        document.getElementById('box2')
      );
    });
  }
}
</script>

<style lang="scss">
.leader-line-page {
  position: relative;
  min-height: 600px;
}
</style>