<template>
  <div id="resume">
    <!-- resume section start -->
    <div class="bg-white dark:bg-black">
      <div class="container sm:px-5 md:px-10 lg:px-14">
        <div class="py-12 px-4 md:px-0">
          <!-- resume page title -->
          <h2 class="heading dark:text-white font-bold font-robotoSlab pb-5">
            Resume
          </h2>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]"
          >
            <!-- eductation start -->
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <i class="fa-solid text-2xl text-[#F95054] fa-graduation-cap" />
                <h4 class="text-3xl dark:text-white font-medium">
                  Education
                </h4>
              </div>
              <div
                class="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              >
                <span class="text-tiny text-gray-lite dark:text-white">&nbsp</span>
                <h3 class="text-xl dark:text-white">
                  MCS (Master in computer science)
                </h3>
                <p class="dark:text-white">
                  Islamia University, Bahawalpur, Pakistan
                </p>
              </div>
              <div
                class="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
              >
              <span class="text-tiny text-gray-lite dark:text-white">&nbsp</span>
                <h3 class="text-xl dark:text-white">
                  BSC
                </h3>
                <p class="dark:text-white">
                  The Best College, Bahawalpur, Pakistan
                </p>
              </div>
             
            </div>
            <!-- eductation end -->

            <!-- experiment start -->
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <i class="fa-solid text-2xl text-[#F95054] fa-briefcase" />
                <h4 class="text-3xl dark:text-white font-medium">
                  Experience
                </h4>
              </div>
              <div
                class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2"
              >
                <span class="text-tiny text-gray-lite dark:text-white">2022-Present</span>
                <h3 class="text-xl dark:text-white">
                  Senior Frontend Developer (VueJs)
                </h3>
                <p class="dark:text-white">
                  Darvis Inc
                </p>
              </div>
              <div
                class="bg-[#f2f4ff] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
              >
                <span class="text-tiny text-gray-lite dark:text-white">2019-2022</span>
                <h3 class="text-xl dark:text-white">
                  Web Developer
                </h3>
                <p class="dark:text-white">
                  The App Makers
                </p>
              </div>
              <!-- <div
                class="py-4 bg-[#eef5fa] dark:bg-transparent pl-5 pr-3 space-y-2 rounded-lg dark:border-[#212425] dark:border-2"
              >
                <span class="text-tiny text-gray-lite dark:text-white">2008</span>
                <h3 class="text-xl dark:text-white">
                  Best Writter
                </h3>
                <p class="dark:text-white">
                  Online Typodev Soluation Ltd.
                </p>
              </div> -->
            </div>
            <!-- experiment start -->
          </div>
        </div>
      </div>

      <!-- working section start -->
      <div
        id="work"
        class="container bg-stone-50 dark:bg-black py-12 px-2 sm:px-5 md:px-10 lg:px-20"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="col-span-1">
            <h4 class="text-5xl dark:text-white font-medium mb-6">
              Working Skills
            </h4>
            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-emerald-500 dark:text-white">Vue.js & Vuex</span>
                <span class="font-semibold text-emerald-500 dark:text-[#A6A6A6">80%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-emerald-500 h-1 rounded-full" style="width: 80%" />
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-violet-500 dark:text-white">Bootstrap</span>
                <span class="font-semibold text-violet-500 dark:text-[#A6A6A6">80%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-[#9272d4] h-1 rounded-full" style="width: 80%" />
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-orange-600 dark:text-white">HTML/CSS</span>
                <span class="font-semibold text-orange-600 dark:text-[#A6A6A6">80%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-orange-600 h-1 rounded-full" style="width: 80%" />
              </div>
            </div>

            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class="font-semibold text-sky-300 dark:text-white">Tailwind Css</span>
                <span class="font-semibold text-sky-300 dark:text-[#A6A6A6">75%</span>
              </div>
              <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                <div class="bg-sky-300 h-1 rounded-full" style="width: 75%" />
              </div>
            </div>
          </div>

          <div class="col-span-1 text-black dark:text-white">
            <h4 class="text-5xl font-medium mb-8">
              Knowledges
            </h4>
            <div class="flex gap-y-5 gap-x-2.5 flex-wrap">
              <button class="resume-btn shadow rounded px-4 dark:border">
                Nuxt.js
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                React.js
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Sass
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Javascript
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Ionic
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Quasar
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Angular.js
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Laravel
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Mysql
              </button>
              <button class="resume-btn shadow rounded px-4 dark:border">
                Git
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- working section end -->
    </div>
    <!-- resume section start -->
  </div>
</template>

<script>
export default {
  name: 'ResumeSection'
}
</script>
<style></style>
