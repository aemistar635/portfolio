<template>
  <div id="contact" class="bg-white lg:rounded-b-2xl dark:bg-black py-10">
    <SuccessModel v-if="sendMailStatus" />
    <h3 class="heading dark:text-white font-bold px-2 sm:px-5 md:px-10 lg:px-14 mb-4">
      Contact
    </h3>
    <div
      class="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2 bg-[#F3F6F6] rounded-xl dark:bg-black mb-[30px] md:mb-[60px]"
    >
      <h3 class="text-4xl">
        <p class="text-gray-lite dark:text-white mb-1">
          I'm always open to discussing product
        </p>
        <p class="font-semibold dark:text-white">
          design work or partnerships.
        </p>
      </h3>

      <form>
        <div data-success="Your message has been received, We will contact you soon." />
        <div class="mt-1">
          <span>Please Fill Required Fields</span>
        </div>

        <!-- name input  -->
        <div class="relative z-0 w-full mt-[40px] mb-8 group">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
            placeholder=" "
            required=""
          >
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Name *
          </label>
        </div>

        <!-- email input  -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
            placeholder=" "
            required=""
          >
          <label
            for="email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email *
          </label>
        </div>

        <!-- message input  -->
        <div class="relative z-0 w-full mb-8 group">
          <input
            id="message"
            v-model="message"
            type="text"
            name="message"
            class="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
            placeholder=" "
            required=""
          >
          <label
            for="message"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Message *
          </label>
        </div>

        <!-- submit buttons -->
        <input
          type="button"
          class="px-6 py-2 rounded-lg border-[2px] mt-3 border-color-910 font-semibold cursor-pointer hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white transition-colors duration-300 ease-in-out hover:border-transparent dark:text-white"
          value="Submit"
          :disabled="disableSendBtn"
          @click="sendForm"
        >
      </form>
    </div>

    <!-- footer start -->
    <footer class="overflow-hidden rounded-b-2xl" style="background: transparent">
      <p class="text-center py-6 text-gray-lite dark:text-color-910">
        © 2022 All Rights Reserved by
        <a
          class="hover:text-[#FA5252] duration-300 transition"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >am</a>.
      </p>
    </footer>
    <!-- footer end -->
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data () {
    return {
      loading: false,
      name: '',
      email: '',
      message: '',
      sendMailStatus: false
    }
  },
  computed: {
    disableSendBtn () {
      if (!this.name || !this.email) {
        return true
      } else if (this.loading) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async sendForm () {
      try {
        this.loading = true
        await this.$mail.send({
          from: this.name,
          replyTo: this.email,
          subject: `Contact us form - ${this.organization}`,
          html: `
          <html lang="">
  <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"> Received an email from ${this.name}</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi there,</p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Name: <b> ${this.name}</b></p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Email: <b> ${this.email}</b></p>
                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Message: <br> ${this.message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->


          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
          `
        })
        this.loading = false

        this.name = ''
        this.email = ''
        this.message = ''
        this.sendMailStatus = true
        setTimeout(() => {
          this.sendMailStatus = false
        }, 8000)
      } catch (e) {
        this.loading = false
        this.sendMailStatus = false
      }
    }
  }
}
</script>
<style></style>
