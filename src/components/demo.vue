<template>
  <el-button type="primary" @click="click">
    demo,click
  </el-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, toRefs, reactive } from '@/vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    data: Array
  },

  setup (props, { emit }) {
    const store = useStore()

    const state = reactive({
      greeting: 'Hello'
    })

    onMounted(() => {
      console.log('onMounted', props.data)
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    function click (e: Event) {
      store.commit('setGreeting', 'from demo' + Date.now())
      emit('click', e)
    }

    return {
      ...toRefs(state),
      click
    }
  }
})
</script>

<style lang="less">
</style>
