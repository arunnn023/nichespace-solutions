export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marqueeRtl: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeLtr: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'marquee-rtl': 'marqueeRtl 20s linear infinite',
        'marquee-ltr': 'marqueeLtr 20s linear infinite',
      },
    },
  },
  plugins: [],
};