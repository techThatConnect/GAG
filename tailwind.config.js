/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'sm': '550px',
      'md': '767px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
      
    colors: {
      
        purp : '#93639d',
        light_pink : '#fde0ef',
       dark_pink :'#f4b6e7',
         dark : '#26152f',
         light :  '#fffffe',
         black : '#000000',
         grey: '#cfc8cd'

    },
    
  },
  plugins: [],
}

