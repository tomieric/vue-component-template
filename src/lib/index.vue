<template>
  <div
    ref="el"
  >
    {{ this.data }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueComponent from '../lib/vue-component'

type AttrVal = number | string | boolean
type Property = {
  name: string;
  value: AttrVal;
}

let vueComponent: unknown = null
export default Vue.extend({
  props: {
    options: Object,

    data: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      defaultOptions: {
      }
    }
  },

  watch: {
    /**
     * 同步数据
     */
    data: {
      handler () {
        this.setData()
      },
      immediate: true,
      deep: true
    }
  },

  mounted () {
    vueComponent = new VueComponent(
      this.$el as HTMLElement,
      { ...Object.assign({}, this.defaultOptions, this.options) }
    )

    console.log(vueComponent)
  },

  methods: {
    setData () {
      // code
    }
  }
})
</script>

<style lang="less">
  @import "../lib/style";
</style>
