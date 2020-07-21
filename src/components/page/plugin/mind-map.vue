<template>
  <div>
    <div class="mind-map">
      <div class="mind-content">
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
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
    position: absolute;
    width: 125%;
    height: 125%;
    padding: 0 20% 20% 0;
    background: #000;
    overflow: scroll;
  }
  .item {
    width: 180%;
    height: 180%;
    background-image: linear-gradient(45deg, lighten($c1, 50%) 0%, $c1 30%, $c1 70%, darken($c1, 50%) 100%);
  }
}
</style>