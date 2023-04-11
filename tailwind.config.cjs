/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography:{
        DEFAULT: {
          css: {
            li: {
              marginTop:0,
              marginBottom:0,
            }
          }
        }
      }
    },
    container: {
      center:true,
      padding: '2rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
