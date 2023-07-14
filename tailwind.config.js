/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.html", "./src/notes/rps.html"],
	theme: {
		extend: {
			fontFamily: {
				robotomono: ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
