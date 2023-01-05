<template>
  <div class="flex justify-center space-x-3">
    <a
      v-for="social in socialContactInfo"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="socialbtn" :class="social.textColor">
        <i :class="social.icon" />
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'SocialContacts',
  data () {
    return {
      socialContactInfo: [
        // {
        //   name: 'Facebook',
        //   icon: 'fab fa-facebook-square',
        //   textColor: 'text-[#1773EA]',
        //   href: ''
        // },
        // {
        //   name: 'Twitter',
        //   icon: 'fab fa-twitter-square',
        //   textColor: 'text-[#1C9CEA]',
        //   href: ''
        // },
        // {
        //   name: 'Dribble',
        //   icon: 'fab fa-dribbble-square',
        //   textColor: 'text-[#e14a84]',
        //   href: ''
        // },
        {
          name: 'Github',
          icon: 'fab fa-github',
          textColor: 'text-[#000]',
          href: 'https://github.com/aemistar635'
        },
        {
          name: 'LinkedIn',
          icon: 'fab fa-linkedin',
          textColor: 'text-[#0072b1]',
          href: 'https://www.linkedin.com/in/muhammad-aamir-072391193/'
        }
      ]
    }
  }
}
</script>
<style>
.socialbtn {
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
  --tw-gradient-from: #fa5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #dd2476;
  transition-property: color, background-color, border-color, fill, stroke,
    -webkit-text-decoration-color;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
