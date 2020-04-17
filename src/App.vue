<template>
  <div id="app" class="app">
    <vueComponent :data="data"></vueComponent>
    <Demo data="demo"></Demo>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@/vue'
import vueComponent from './lib/index.vue'
import Demo from './components/demo.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    vueComponent,
    Demo
  },

  setup () {
    const store = useStore()
    const data = computed(() => [{ text: store.state.greeting }])
    return {
      data
    }
  }
})
</script>

<style>
html,body {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
