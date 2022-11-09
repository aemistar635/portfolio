<template>
  <header
    class="mt-2 lg:mt-5 lg:border block lg:py-[25px] lg:rounded-[16px] bg-gray-100/75 lg:bg-white dark:bg-[#111111]"
  >
    <nav>
      <div class="hidden lg:block">
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
      </div>
      <div v-if="openMenu" class="lg:hidden block">
        <ul
          class="w-full mt-[70px] rounded-b-[20px] shadow-md bg-white dark:bg-[#1d1d1d]"
        >
          <li v-for="nav in navBar" :key="nav.name">
            <a
              class="mobile-menu-items"
              :class="nav.active ? 'mobile-menu-items-active' : ''"
              :href="nav.href"
              @click="activeTab(nav.name)"
            >
              <span class="mr-2 text-xl">
                <i :class="nav.icon" />
              </span>
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'NavbarComponent',
  props: {
    openMenu: {
      type: Boolean,
      default: false
    }
  },
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
      this.$emit('closeMenu')
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
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.mobile-menu-items {
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  font-family: Poppins, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(68 86 108 / var(--tw-text-opacity));
  transition-property: color, background-color, border-color, fill, stroke,
    -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, -webkit-text-decoration-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-items-active {
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1rem;
  font-family: Poppins, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgb(250 82 82 / var(--tw-text-opacity));
  transition-property: color, background-color, border-color, fill, stroke,
    -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, -webkit-text-decoration-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
