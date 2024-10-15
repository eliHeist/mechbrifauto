import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				dark: {
                    DEFAULT: "hsl(var(--dark) / <alpha-value>)",
                    2: "hsl(var(--dark-2) / <alpha-value>)",
                    3: "hsl(var(--dark-3) / <alpha-value>)"
                },
				primary: "hsl(var(--primary) / <alpha-value>)",
				lead: "hsl(var(--lead) / <alpha-value>)",
				secondary: "hsl(var(--secondary) / <alpha-value>)",
				white: "hsl(var(--white) / <alpha-value>)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
