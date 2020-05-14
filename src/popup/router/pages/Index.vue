<template>
  <button @click="run()">Run Tests</button>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      run: 'run'
    }),
    ...mapMutations({
      setTab: 'setTab'
    })
  }
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
