const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.svelte"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				...colors
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
