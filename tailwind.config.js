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
			'indigo-gradient': "linear-gradient(to right, rgb(55 48 163), rgb(79 70 229), rgb(55 48 163))",
			"indigo-gradient-dark": "linear-gradient(to right, rgb(49 46 129), rgb(55 48 163), rgb(49 46 129))"
		}
	  },
	},
	plugins: [],
  }