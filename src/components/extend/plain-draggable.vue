<template>
  <div ref="el">
    <slot></slot>
  </div>
</template>

<script>
var PlainDraggable = window.PlainDraggable;

export default {
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      PD: null,
      List: [],
      items: [],
      itemHeight: 0,
      isDrag: false
    };
  },
  watch: {
    'list': 'updateList'
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.PD =  new PlainDraggable(this.$refs.el, {
          // containment: {left: -2000, top: -2000, right: -2000, bottom: -2000},
          onDrag: function(moveTo) {
            console.log(moveTo)
            return true;
          },
          onDragEnd: function() {}
        });
      });
    },
    destroyItems() {
      this.PD.remove();
    }
  },
  computed: {},
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroyItems();
  }
}
</script>

<style lang="scss">
</style>