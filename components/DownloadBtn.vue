<template>
  <button class="download-btn" @click="downloadPdf">
    <i class="fas fa-download mr-2" />
    <!-- <a href="./static/M.Aamir-Resume.pdf" target="_blank"> -->
      Download CV
    <!-- </a> -->
  </button>
</template>
<script>
export default {
  name: 'DownloadBtn',
  methods: {
    downloadPdf() {
      // Assuming the PDF file is in the static folder
      const pdfPath = './M.Aamir-Resume.pdf';

      // Get the absolute URL of the PDF file
      const pdfUrl = 'https://aamir635.netlify.app/' + pdfPath;

      // Trigger download using an anchor element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.target = '_blank'; // Open in a new tab if you prefer
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
}
</script>
<style>
.download-btn {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #fa5252;
  --tw-gradient-to: rgb(250 82 82 / 0);
  --tw-gradient-from: #dd2476;
  --tw-gradient-to: rgb(221 36 118 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: #dd2476;
  --tw-gradient-to: #fa5252ef;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.125rem;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  transition-property: color, background-color, border-color, fill, stroke, opacity,
    box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  transition-timing-function: linear;
}
</style>
