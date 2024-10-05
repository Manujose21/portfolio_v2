import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        'primary': '#0e0e11',
        'secondary': '#230f2f',
        'tertiary': '#0f011f',
      },
      'color-text':{
        'primary': '#ffffff',
        'secondary': '#c5c5c5',
      },
      'revolver': {
        '50': '#f1e8ff',
        '100': '#e6d5ff',
        '200': '#d6b4ff',
        '300': '#c187ff',
        '400': '#b857ff',
        '500': '#ba31ff',
        '600': '#c40eff',
        '700': '#c205fd',
        '800': '#9a08cb',
        '900': '#77119e',
        '950': '#1c0424',
      },
    
    },
  },
  extends: {
    filter:{
      'blur': {
        '1': 'blur(1px)',
        '2': 'blur(2px)',
        '3': 'blur(3px)',
        '4': 'blur(4px)',
        '5': 'blur(5px)',
        '6': 'blur(6px)',
        '7': 'blur(7px)',
        '8': 'blur(8px)',
        '9': 'blur(9px)',
        '10': 'blur(10px)',
        '11': 'blur(11px)',
        '12': 'blur(12px)',
        '13': 'blur(13px)',
        '14': 'blur(14px)',
        '15': 'blur(15px)',
        '16': 'blur(16px)',
      }
    }
  },
  plugins: [],
};
export default config;
