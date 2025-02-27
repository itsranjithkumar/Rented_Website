/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  // Remove these outdated paths
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  
	  // Update to match your current project structure
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	  "*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  // ... rest of your configuration remains the same
	},
	plugins: [require("tailwindcss-animate")],
}