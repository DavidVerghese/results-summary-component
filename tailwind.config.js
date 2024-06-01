/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/data.json"
	],
	theme: {
	  extend: {
			colors: {
				'light-red': 'hsl(0, 100%, 67%)',
				'orangey-yellow': 'hsl(39, 100%, 56%)',
				'green-teal': 'hsl(166, 100%, 37%)',
				'cobalt-blue': 'hsl(234, 85%, 45%)',
				'white': 'hsl(0, 0%, 100%)',
				'pale-blue': 'hsl(221, 100%, 96%)',
				'light-lavender': 'hsl(241, 100%, 89%)',
				'dark-gray-blue': 'hsl(224, 30%, 27%)'
			},
		backgroundImage: {
			'indigo-gradient': "linear-gradient(to right, rgb(55 48 163), rgb(79 70 229), rgb(55 48 163))",
			"indigo-gradient-dark": "linear-gradient(to right, rgb(49 46 129), rgb(55 48 163), rgb(49 46 129))",
			"light-slate-blue-gradient": "hsl(252, 100%, 67%)",
			'background-gradient': 'linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))',
			'circle-gradient': 'linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))',
		}
	  },
	},
	plugins: [],
  }