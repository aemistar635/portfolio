<template>
  <div id="about">
    <div class="lg:rounded-t-2xl bg-white dark:bg-[#111111]">
      <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <!-- about page title -->
        <h3 class="heading dark:text-white font-bold font-robotoSlab pb-5">
          About Me
        </h3>
        <!-- personal info for mobile devices start -->
        <div class="lg:hidden">
          <div
            class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
          >
            <!-- profile image  -->
            <div class="max-w-screen-lg mx-auto mt-5">
              <img
                src="https://bostamihtml.ibthemespro.com/images/about/avatar.jpg"
                class="mx-auto w-[240px] h-[240px] drop-shadow-xl rounded-[20px] w-full object-cover"
                alt="about"
              >
            </div>
            <div class="pb-8">
              <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
                Monalisa Ashley
              </h2>
              <h3
                class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"
              >
                Ui/Ux Designer
              </h3>

              <SocialContacts class="" />

              <!-- Contact info start -->
              <ContactInfo />
              <!-- Contact info end -->
            </div>
          </div>
        </div>

        <div
          class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden"
        >
          <div class="col-span-12 space-y-2.5">
            <div class="lg:mr-16 text-[#44566c] dark:text-color-910">
              <p class="leading-7">
                Over the past 9 years, as a Front-end Developer, I have
                designed, developed, and launched customized, highly responsive
                websites and e-commerce solutions using advanced technologies.
                In addition, I have consistently met client expectations and
                project milestones while working effectively in deadline-driven
                environments. Please consider the following highlights:
              </p>
              <ul class="list-disc px-6 my-3 space-y-4">
                <li>
                  Designed and developed front-end for 180+ webpages using
                  jQuery, JavaScript, HTML5, and CSS/Bootstrap
                </li>
                <li>
                  Built 190+ components in ASP.Net using C# asynchronous methods
                </li>
                <li>
                  Created user-centric e-commerce sites for small business
                  owners using various web technologies including Shopify and
                  WordPress
                </li>
              </ul>
              <p class="leading-7 mt-2.5">
                My aim is to bring across your message and identity in the most
                creative way. I created websites for many famous brand
                companies.
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
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Using responsive utility variants to build adaptive user
                interfaces.
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
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                I have expertise in following frontend frameworks. Vue.js,
                Angular.js, .
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
                PSD to HTML
              </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Cross-browser compatibility is the ability of a website or web
                application to function across different browsers and degrade
                gracefully when browser features are absent or lacking.
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
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod volutpat.
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
