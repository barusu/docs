<template>
  <div class="plain-draggable-list">
    <div class="item" ref="item" v-for="i in list" v-text="i.content" :key="i.id"></div>
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
    updateList() {
      var that = this;
      this.destroyItems();
      this.$nextTick(() => {
        this.List = this.$refs.item;
        if(!this.List.length) return;
        var rect = this.List[0].getBoundingClientRect();
        this.itemHeight = rect.height;
        this.items = this.List.map((el) => {
          return new PlainDraggable(el, {
            snap: {
              y: {step: this.itemHeight},
              side: 'start'
            },
            onDrag: function(moveTo) {
              if (!moveTo.snapped || this.top === moveTo.top) return false;
              that.dragHandle(this, moveTo.top);
              return true;
            },
            onDragEnd: function() {
              if(that.isDrag) {
                that.isDrag = false;
                return;
              }else {
                that.$emit('click', this);
              }
            }
          });
        });
      });
    },
    dragHandle(i, top) {
      this.isDrag = true;
      var index = this.items.indexOf(i);
      index +=  Math.round((top - i.top) / this.itemHeight);
      if(this.items[index]) {
        this.items[index].top = i.top;
        i.top = top;
      }
      this.items.sort((a, b) => a.top - b.top);
    },
    destroyItems() {
      this.items.forEach(i => i.remove());
      this.items = [];
    }
  },
  computed: {},
  mounted() {
    this.updateList();
  },
  beforeDestroy() {
    this.destroyItems();
  }
}
</script>

<style lang="scss">
$c1: #51baf2;

.plain-draggable-list {
  width: 300px;
  margin-bottom: 1em;
  .item {
    padding: 0 .5em;
    line-height: 2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
    background-image: linear-gradient(lighten($c1, 20%) 0%, $c1 10%, $c1 90%, darken($c1, 20%) 100%);
    transition: transform 200ms ease-in, filter 300ms;
  }
  .plain-draggable-dragging {
    filter: brightness(1.1);
  }
}
</style>