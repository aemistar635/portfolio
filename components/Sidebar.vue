<template>
  <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
    <div
      class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
    >
      <!-- profile image -->
      <img
        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        :src="require(`~/static/amir.jpeg`)"
        alt="profile"
      >
      <!-- <img
        class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        src="https://bostamihtml.ibthemespro.com/images/about/avatar.jpg"
        alt="profile"
      > -->
      <div class="pt-[100px] pb-8">
        <h1 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
          Muhammad Aamir
          <!-- Monalisa Ashley -->
        </h1>
        <h3
          class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"
        >
          Frontend Developer
          <!-- Ui/Ux Designer -->
        </h3>

        <SocialContacts />

        <Navbar />

        <ContactInfo />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarComponent'
}
</script>
<style></style>
