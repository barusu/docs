<template>
  <div>
    <button type="button" @click="reset">reset</button>
    <div class="mind-map" ref="main">
      <div class="mind-content" ref="content" id="mindmap">
        <div class="top-node node" id="node" v-text="main" ref="top"></div>
        <VueDragResize v-for="i in boxs" :key="i.id" :id="'node' + i.id" :isActive="i.ac" :w="80" :h="30" :x="i.x" :y="i.y" @activated="set(i)" @deactivated="unset(i)" v-on:resizing="resize(i)" v-on:dragging="resize(i)" :parentLimitation="false" :isResizable="false">
          <div :class="i.class" v-text="i.content"></div>
        </VueDragResize>
      </div>
    </div>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize';
import Line from './leader-line.js';

const d3 = window.d3;
const zoom = d3.zoom();

var nodelist = [], LINES = [];
var mockdata = {
  id: '',
  name: 'Main Node',
  children: [
    {
      id: '1212211',
      name: "Node1"
    }, {
      id: '121411',
      name: "Node2"
    }, {
      id: '126711',
      name: "Node3",
      children: [
        {
          id: '090832',
          name: 'Node3-1'
        }, {
          id: '121dsds',
          name: 'Node3-2'
        }
      ]
    }, {
      id: '12176611',
      name: "Node4"
    }
  ]
};
function calcWeight(item, x) {
  item.x = x;
  var weight = 0;
  if(item.children) {
    item.children.forEach(i => {
      weight += calcWeight(i, x + 1);
    });
  }
  if(weight < 1) {
    weight = 1;
    item.isTerminal = true;
  }
  item.weight = weight;
  return weight;
}
const bw = 150, bh = 20;
function calcPostion(item) {
  // var spaceTop = 0, spaceBottom = 0;
  var ah = item.y + 1;
  if(item.children) {
    item.children.forEach(i => {
      var h = i.weight;
      // if(i.isTerminal) {
      //   if(spaceTop >= 2) {
      //     spaceTop -= 2;
      //     h = 0;
      //   }else {
      //     h -= spaceTop;
      //     spaceTop = 0;
      //     spaceBottom += h;
      //   }
      // }else {
      //   spaceBottom = 0;
      // }
      ah -= h;
    });
    item.children.forEach(i => {
      i.y = ah + i.weight - 1;
      ah += 2 * i.weight;
      var line = new Line('node' + item.id, 'node' + i.id);
      item.lines.push(line);
      i.lines = [line];
      LINES.push(line);
      calcPostion(i);
      nodelist.push(i);
    });
  }
}
calcWeight(mockdata, 0);
mockdata.y = 0;
mockdata.lines = [];
calcPostion(mockdata);

console.log(mockdata);

export default {
  components: {
    VueDragResize
  },
  data() {
    return {
      main: {x: 0, y: 0, text: '', nodes: [], lines: []},
      content: null,
      item: null,
      list: nodelist,
      boxs: [
        {id: 1, ac: false, w: 100, h: 30, x: 30, y: 30, class: 'node', content: "wwwww"}
      ],
      data: mockdata
    };
  },
  methods: {
    update() {
      var top = this.$refs.top.offsetTop;
      var left = this.$refs.top.offsetLeft;
      this.main = this.data.name;
      this.boxs = this.list.map(i => {
        return {
          id: i.id,
          ac: false,
          x: left + i.x * bw,
          y: top + i.y * bh,
          class: 'node',
          content: i.name,
          lines: i.lines
        };
      });
      this.$nextTick(() => {
        this.list.forEach(i => {
          i.lines.forEach(line => line.position());
        });
      });
    },
    reset() {
      this.content.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
    },
    set(i) {
      this.boxs.forEach(b => {
        if(b.id == i.id) b.ac = true;
        else b.ac = false;
      });
    },
    unset(i) {
      i.ac = false;
      // console.log(i);
    },
    resize(i) {
      i.lines.forEach(l => l.position());
      // console.log(i);
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.update();
      this.content = d3.select(this.$refs.main);
      this.item = d3.select('#mindmap');
      this.content.call(zoom.on('zoom', () => {
        this.item.attr('style', `transform: translate(${d3.event.transform.x}px,${d3.event.transform.y}px) scale(${d3.event.transform.k})`);
        LINES.forEach(i => {
          i.position();
        });
      }))
    });
  }
}
</script>

<style lang="scss">
$c1: #f3f;
.mind-map {
  position: relative;
  background: #fcfcfc;
  height: 500px;
  overflow: hidden;
  .mind-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .node {
    padding: 0 .5em;
    line-height: 2;
    background: #51baf2;
    border-radius: 4px;
    color: #fff;
    text-align: center;
  }
  .top-node {
    position: absolute;
    top: 50%;
    left: 30%;
    // transform: translate(-50%, -50%);
    user-select: none;
  }
  // .item {
  //   width: 180%;
  //   height: 180%;
  //   background-image: linear-gradient(45deg, lighten($c1, 50%) 0%, $c1 30%, $c1 70%, darken($c1, 50%) 100%);
  // }
}
</style>