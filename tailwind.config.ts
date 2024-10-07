import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');



const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F2F2F2",
        // secondary:"#FABE33",
        // secondary1:"#eb6d2f",
        // secondary2:"#eb6d2f",
        // background:"#f8f7f2",
        // background:"#fbf9fa",
        background:"#f8f7f2",
        // primary:"#efb039",
        secondary2:"#762008",
        secondary3:"#f6e7cf",
        secondary:"#d7873c",
        secondary1:"#af581c",  
        secondary4:"#ad5a1d",  
        secondary5:"#ffc219",  
        secondary6:"#fcaf01",   
      },
      fontFamily: {
        Brush: ["Brush Script MT"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      google: {
        'text-gray': '#3c4043', 
        'button-blue': '#1a73e8',
        'button-blue-hover': '#5195ee',
        'button-dark': '#202124',
        'button-dark-hover': '#555658',
        'button-border-light': '#dadce0',
        'logo-blue': '#4285f4',
        'logo-green': '#34a853',
        'logo-yellow': '#fbbc05',
        'logo-red': '#ea4335',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }: any) {
        addVariant('activee', ['&:activee', '&.router-link-active'])
      }),
    require("flowbite/plugin"),
  ],
};
export default config;
