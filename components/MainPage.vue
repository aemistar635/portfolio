<!-- Please remove this file from your project -->
<template>
  <div
    class="bg-white font-['Poppins'] dark:bg-gray-700 dark:text-white transition-all duration-1000 scroll-smooth"
    :class="darkMode ? 'dark' : 'light'"
  >
    <!-- {{--    nav-bar--}} -->
    <div
      id="nav"
      class="min-h-screen w-full flex flex-col bg-light-custom dark:bg-dark-custom bg-no-repeat bg-center bg-cover"
    >
      <div class="w-1/2 mx-auto mt-8 flex justify-between items-center">
        <div class="text-rose-500 text-2xl font-bold">
          logo
        </div>
        <div
          id="theme-toggler"
          class="bg-rose-500 rounded-full flex justify-center items-center bg-white p-2 cursor-pointer text-white text-[16px]"
        >
          <i
            v-if="!darkMode"
            class="far fa-moon"
            @click="darkMode = !darkMode"
          />
          <i v-else class="fas fa-sun" @click="darkMode = !darkMode" />
        </div>
      </div>

      <div
        class="mx-auto container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]"
      >
        <!-- sidebar personal info -->
        <Sidebar />
        <!-- sidebar info end -->

        <div class="col-span-12 lg:col-span-8">
          <Navbar class="lg:hidden block" />

          <!-- {{--about section--}} -->
          <AboutSection />

          <!-- {{--resume section--}} -->
          <ResumeSection />
          <!-- {{--Contact section--}} -->
          <ContactSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      darkMode: false
    }
  }
}
</script>
<style></style>
