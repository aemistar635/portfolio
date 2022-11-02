<template>
  <header
    class="sticky top-0 z-10 lg:relative mt-5 border block py-[25px] rounded-[16px] bg-white dark:bg-[#111111]"
  >
    <nav>
      <ul class="flex justify-center items-center flex-wrap 2xl:gap-0 gap-6">
        <li v-for="nav in navBar" :key="nav.name">
          <a
            class="menu-item bg-stone-100"
            :class="nav.active ? 'active' : ''"
            :href="nav.href"
            @click="activeTab(nav.name)"
          >
            <span class="text-xl mb-1">
              <i :class="nav.icon" />
            </span>
            {{ nav.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'NavbarComponent',
  data () {
    return {
      navBar: [
        { name: 'About', icon: 'fas fa-user', active: true, href: '#about' },
        {
          name: 'Resume',
          icon: 'far fa-file-alt',
          active: false,
          href: '#resume'
        },
        {
          name: 'Work',
          icon: 'fas fa-briefcase',
          active: false,
          href: '#work'
        },
        {
          name: 'Contact',
          icon: 'far fa-address-book',
          active: false,
          href: '#contact'
        }
      ]
    }
  },
  methods: {
    activeTab (tab) {
      this.navBar = this.navBar.map((item) => {
        if (tab === item.name) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
    }
  }
}
</script>
<style>
.menu-item {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  display: flex;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  --tw-bg-opacity: 1;
  --tw-gradient-from: #fa5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #dd2476;
  font-family: Poppins, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.active {
  background: #fa5252;
  color: #fff;
}
</style>
