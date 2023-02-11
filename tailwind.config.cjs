/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			colors: {
				theme: {
					bg: '#f6f6f6',
					paperBg: '#fcfcfc',
					primary: '#426FEF',
					secondary: '#ffb968',
					secondaryLight: '#FEDCA9',
				}
			},
			transitionProperty: {
				border: 'border'
			},
			fontSize: {
				'2xs': ['0.6rem', '125%']
			},
		},
  },
  plugins: [],
	safelist: [
		{
			pattern: /.*-theme-*./
		},
		{
			pattern: /.*-gray-*./
		}
	]
}
