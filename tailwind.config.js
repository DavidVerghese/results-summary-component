/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		},
		backgroundImage: {
			'indigo-gradient': "linear-gradient(to right, #4f46e5, #4338ca, #4f46e5)",
		}
	  },
	},
	plugins: [],
  }