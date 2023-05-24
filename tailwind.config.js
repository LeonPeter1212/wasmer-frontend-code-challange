/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1152px",
				xl: "1280px",
			},
		},
	},
	plugins: [],
};
