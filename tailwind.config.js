/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        form:'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
        card:'linear-gradient(180deg, rgba(0, 0, 0, 0) 2.05%, #363636 100%)',
        story:' linear-gradient(360deg, rgba(0, 0, 0, 0.69) 1.28%, rgba(8, 183, 85, 0.8) 100%)'
      },
      backgroundImage: () => ({
        stories:"linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 113, 49, 0.72) 0%, rgba(2, 173, 77, 0.85) 100%), url(@/assets/Resources/about.svg)",
        card:'linear-gradient(180deg, rgba(0, 0, 0, 0) 2.05%, #363636 100%)',
        cardBg:'linear-gradient(180deg, rgba(0, 0, 0, 0) 2.05%, #363636 100%), url(@/assets/Resources/mc.png)',
        story:' linear-gradient(360deg, rgba(0, 0, 0, 0.69) 1.28%, rgba(8, 183, 85, 0.8) 100%), url(@/assets/Resources/chair.png)'
      }),
    },
  },
  plugins: [],
}
