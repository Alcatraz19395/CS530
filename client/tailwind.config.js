/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // No need to include the line-clamp plugin as it's now included by default
    // require('@tailwindcss/line-clamp'),
  ],
};
