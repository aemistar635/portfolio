<template>
  <div
    id="theme-toggler"
    class="bg-rose-500 rounded-full flex justify-center items-center p-2 cursor-pointer text-white xl:text-[16px] lg:text-[10px] text-[16px]"
  >
    <i v-if="!darkMode" class="far fa-moon" @click="changeMode(true)" />
    <i v-else class="fas fa-sun" @click="changeMode(false)" />
  </div>
</template>
<script>
export default {
  name: 'DarkMode',
  data () {
    return {
      darkMode: false
    }
  },
  methods: {
    changeMode (value) {
      this.darkMode = value
      this.$emit('darkMode', value)
    }
  }
}
</script>
<style></style>
