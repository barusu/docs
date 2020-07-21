<template>
  <div class="list-plain-draggable">
    <h2><span>List</span> <span class="chinese">可拖拽列表</span></h2>
    <p class="info">基于<a href="https://github.com/anseki/plain-draggable" target="_blank"><xc-icon type="github"></xc-icon>plain-draggable</a>插件制作的列表.</p>
    <p class="tip">仅适用于列表项等高的列表.</p>
    <div class="preview clearfix">
      <PlainDraggableList :list="list" @click="clickhandle"></PlainDraggableList>
    </div>
  </div>
</template>

<script>
import PlainDraggableList from '../../extend/plain-draggable-list';

export default {
  components: {
    PlainDraggableList
  },
  data() {
    return {
      list: [
        {id: 1, content: "VueDragResize"},
        {id: 2, content: "PlainDraggable"},
        {id: 3, content: "Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"},
        {id: 4, content: "By default, the moving is restricted to inside of th"},
        {id: 5, content: "that has a bounding-box is accepted. Oth"},
        {id: 6, content: "properties instead, for HTML el"},
        {id: 7, content: "Note that the left and top CSS properties may be perf"},
        {id: 8, content: "The options argument is an Object that can have properties "},
        {id: 9, content: "Re-calculate the position of the draggable element"}
      ]
    };
  },
  methods: {
    clickhandle(i) {
      console.log(i);
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="scss">
$c1: #51baf2;

.list-plain-draggable {
  .info {
    svg {
      width: 1.5em;
      vertical-align: text-bottom;
    }
    a {
      color: #444;
      padding: 0 .5em;
    }
  }
}
</style>