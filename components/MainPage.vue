<!-- Please remove this file from your project -->
<template>
  <div
    class="bg-white font-['Poppins'] dark:bg-gray-700 dark:text-white transition-all duration-1000"
    :class="darkMode ? 'dark' : 'light'"
  >
    <!-- {{--    nav-bar--}} -->
    <div
      id="nav"
      class="min-h-screen w-full flex flex-col bg-light-custom dark:bg-dark-custom bg-no-repeat bg-center bg-cover"
    >
      <div class="block lg:hidden">
        <div class="section-bg fixed z-20">
          <div class="w-full flex justify-between items-center px-4">
            <DarkMode @darkMode="themeMode" />
            <div class="flex items-center">
              <button id="menu-toggle" type="button" class="menu-toggle-btn">
                <i
                  id="menu-toggle-open-icon"
                  class="fas text-xl"
                  :class="!showMenu ? 'fa-bars' : 'fa-xmark'"
                  @click="showMenu = !showMenu"
                />
              </button>
            </div>
          </div>
        </div>
        <Navbar
          class="z-10 w-full lg:hidden block fixed"
          :open-menu="showMenu"
          @closeMenu="showMenu = false"
        />
      </div>

      <div
        class="mx-auto container grid grid-cols-12 md:gap-10 justify-between lg:mt-[200px]"
      >
        <!-- sidebar personal info -->
        <Sidebar @darkModeTheme="themeMode" />
        <!-- sidebar info end -->

        <div class="col-span-12 lg:col-span-8">
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
      darkMode: false,
      showMenu: false
    }
  },
  methods: {
    themeMode (value) {
      this.darkMode = value
    }
  }
}
</script>
<style>
.section-bg {
  display: flex;
  width: 100%;
  justify-content: space-between;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.menu-toggle-btn {
  margin-left: 0.75rem;
  display: flex;
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
