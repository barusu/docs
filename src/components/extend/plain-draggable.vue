<template>
  <div ref="el" @click="select" class="plain-draggable" :class="{'active': isActive}">
    <input type="text" v-model="Text">
  </div>
</template>

<script>
var PlainDraggable = window.PlainDraggable;

var poi = 1;

export default {
  components: {},
  props: {
    active: {
      type: Number
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      id: ++poi,
      PD: null,
      List: [],
      items: [],
      itemHeight: 0,
      isDrag: false
    };
  },
  methods: {
    select() {
      console.log('click');
      this.$emit('select', this.id);
    },
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
  computed: {
    isActive() {
      return this.active == this.id;
    },
    Text: {
      set(v) {
        this.$emit(v);
      },
      get() {
        return this.text;
      }
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroyItems();
  }
}
</script>

<style lang="scss">
.plain-draggable {
  &.active {
    border: 1px solid #000;
  }
}
</style>