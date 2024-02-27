<template>
  <div id="about">
    <div class="lg:rounded-t-2xl bg-white dark:bg-black">
      <div class="pt-12 md:py-12 lg:mt-0 mt-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <!-- about page title -->
        <h3 class="heading dark:text-white font-bold font-robotoSlab pb-5">
          About Me
        </h3>
        <!-- personal info for mobile devices start -->
        <div class="lg:hidden">
          <div
            class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-black px-6 rounded-[20px] md:mt-[50px] lg:mt-0"
          >
            <div class="flex flex-col">
              <!-- profile image  -->
              <div class="mx-auto mt-5">
                <img
                  class="mx-auto w-[240px] h-[240px] drop-shadow-xl rounded-[20px] w-full object-cover"
                  :src="require(`~/static/amir.jpeg`)"
                  alt="profile"
                >
                <!-- <img
                src="https://bostamihtml.ibthemespro.com/images/about/avatar.jpg"
                class="mx-auto w-[240px] h-[240px] drop-shadow-xl rounded-[20px] w-full object-cover"
                alt="about"
              > -->
              </div>
              <div class="">
                <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
                  Muhammad Aamir
                  <!-- Monalisa Ashley -->
                </h2>
                <h3
                  class="mb-4 text-[#7B7B7B] inline-block dark:bg-side-info px-5 py-1.5 rounded-lg dark:text-white"
                >
                  Frontend Developer
                  <!-- Ui/Ux Designer -->
                </h3>
              </div>
            </div>

            <div class="mt-4">
              <SocialContacts class="" />

              <!-- Contact info start -->
              <ContactInfo />
              <!-- Contact info end -->
            </div>
          </div>
        </div>

        <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
          <div class="col-span-12 space-y-2.5">
            <div class="lg:mr-16 text-[#44566c] dark:text-color-910">
              <p class="leading-7">
                I’m a passionate Frontend Software Engineer with 4 years of experience in crafting user-centric web applications. 
                As a professional front-end web developer, I am adept at creating large-scale single-page applications and landing 
                websites using VueJS, NuxtJs, ReactJs, TypeScript, JavaScript, HTML, and CSS. I am also proficient in Quasar, Bootstrap, Bootstrap-Vue,
                Konva, HighChart, ChartJS, Git, Docker, Cypress, Node Modules, Ionic, and other frontend technologies.
                <!-- Over the past 3 years, I have worked with clients and big Companies for their startups to help them
                reach their goals with 100% satisfaction.
                Ranging from basic custom website projects (HTML,CSS, Javascript, Bootstrap, Jquery) to
                high-end large Scale Web App projects as Single Page Apps (AngularJS, VueJS, ReactJs), I worked on variety of shop
                Stores (VueStoreFront), school Learning Management Systems(LMS), Brand Websites and cool animated
                websites. -->
              </p>
              <ul class="list-disc px-6 my-3 space-y-4">
                <li>
                  Designed and developed front-end webpages using Boostrap,Vue-Boostrap,Quasar,TailwindCss,
                  HTML5, and CSS.
                </li>
                <li>Dashboard & single page application development using Vue.js, Nuxt.js, Vuex and Quasar</li>
                <li>Implement state management solutions such as Vuex/Pinia to manage application state.</li>
                <li>
                  Dockerize the Vue JS application and deploy it into a Docker container.
                </li>
                <li>Using Axios or the built-in fetch API and WebSocket to communicate with the backend.</li>
                <li>
                  Knowledge with version control systems (GitHub, GitLab).
                </li>
              </ul>
              <p class="leading-7 mt-2.5">
                My aim is to bring across your message and identity in the most creative
                way. I created websites for many famous brand companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- what i do section start -->
      <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
          What I do!
        </h3>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/responsive-design.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                Responsive Design
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                Using responsive utility variants to build adaptive user interfaces.
              </p>
            </div>
          </div>

          <div class="about-box bg-[#fefaf0] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/frameworks.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                Frameworks
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                I have expertise in following frontend frameworks. Vue.js, React,js, Angular.js, .
              </p>
            </div>
          </div>

          <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/psd-to-html.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                PSD/XD/Figma to HTML
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                I will do convert responsive and pixel perfect - sketch to html, psd to html, xd to html, figma to html, using bootstrap, Quasar, Tailwind css.
              </p>
            </div>
          </div>

          <div class="about-box bg-[#fff4f4] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/cross-browser-compatibility.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                Cross browser compatibility
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                Proficient in ensuring seamless cross-browser compatibility for web applications
                 through adherence to web standards, 
                rigorous testing, and responsive design principles.
              </p>
            </div>
          </div>

          <div class="about-box bg-[#fff0f8] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/git.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                Git
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                Skilled in version control with Git, demonstrating expertise in managing
                 collaborative software development, branch management, and ensuring code
                  integrity throughout project lifecycles.
              </p>
            </div>
          </div>

          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img
              class="w-10 h-10 object-contain block"
              :src="require(`~/static/web-development.png`)"
              alt="icon"
            >
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold">
                Web Development
              </h3>
              <p class="leading-8 text-gray-lite dark:text-white">
                Experienced web developer with a strong proficiency in creating dynamic and responsive websites,
                 utilizing a diverse skill set encompassing HTML, CSS, JavaScript,
                  and familiarity with modern frameworks..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
<style>
.about-box {
  display: flex;
  gap: 1rem;
  border-radius: 0.75rem;
  --tw-border-opacity: 1;
  border-color: rgb(33 36 37 / var(--tw-border-opacity));
  padding: 1.5rem;
}
</style>
