<template>
  <label class="input-wrapper" :class="skin">
    <span v-if="label" v-html="label" class="label" @click="click"></span>
    <input type="text" v-model="field" :placeholder="placeholder" @blur="blur" :readonly="readOnly">
  </label>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    label: String,
    value: [String, Number],
    placeholder: String,
    skin: {
      type: String,
      default: 'base'
    },
    readonly: null
  },
  methods: {
    click() {
      this.$emit('click');
    },
    blur() {
      this.$emit('blur');
    }
  },
  computed: {
    readOnly() {
      // eslint-disable-next-line
      return this.readonly !== undefined && this.readonly !== false;
    },
    field: {
      set(v) {
        this.$emit('input', v);
      },
      get() {
        return this.value;
      }
    }
  }
};
</script>

<style lang="scss">
  .input-wrapper {
    width: 100%;
    font-size: .12rem;
    line-height: 1;
    &.single {
      display: block;
      > span {
        display: block;
        line-height: 1.5;
      }
      input {
        display: block;
        width: 100%;
        padding: 0 .2em;
        border-bottom: 1px solid #ddd;
        font-size: .14rem;
        line-height: 2;
        color: #555;
        background: transparent;
        transition: all .34s;
        &:hover {
          border-color: #999;
        }
        &:focus {
          border-color: #50bfff;
          color: #333;
        }
        &::-webkit-input-placeholder {
          font-size: 12px;
          color: #aaa;
        }
        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          font-size: 12px;
          color: #aaa;
        }
        &::-moz-placeholder { /* Mozilla Firefox 19+ */
          font-size: 12px;
          color: #aaa;
        }
        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
          font-size: 12px;
          color: #aaa;
        }
      }
    }
    &.base {
      display: inline-table;
      > * {
        display: table-cell;
      }
      .label {
        width: 1px;
        height: 2.5em;
        padding: 0 .1rem;
        border-radius: 4px 0 0 4px;
        border: 1px solid #bbb;
        border-right: 0;
        line-height: 2.4;
        white-space: nowrap;
        vertical-align: middle;
        + input {
          border-radius: 0 4px 4px 0;
        }
      }
      input {
        width: 100%;
        height: 2.5em;
        padding: 0 .1rem;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #bbb;
        border-radius: 4px;
        line-height: 2.5;
        &:hover {
          border-color: #999;
        }
        &:focus {
          border-color: #50bfff;
        }
      }
    }
  }
</style>