
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #f7d6a0 
		"--color-primary-50": "254 249 241", // #fef9f1
		"--color-primary-100": "253 247 236", // #fdf7ec
		"--color-primary-200": "253 245 231", // #fdf5e7
		"--color-primary-300": "252 239 217", // #fcefd9
		"--color-primary-400": "249 226 189", // #f9e2bd
		"--color-primary-500": "247 214 160", // #f7d6a0
		"--color-primary-600": "222 193 144", // #dec190
		"--color-primary-700": "185 161 120", // #b9a178
		"--color-primary-800": "148 128 96", // #948060
		"--color-primary-900": "121 105 78", // #79694e
		// secondary | #5dab30 
		"--color-secondary-50": "231 242 224", // #e7f2e0
		"--color-secondary-100": "223 238 214", // #dfeed6
		"--color-secondary-200": "215 234 203", // #d7eacb
		"--color-secondary-300": "190 221 172", // #beddac
		"--color-secondary-400": "142 196 110", // #8ec46e
		"--color-secondary-500": "93 171 48", // #5dab30
		"--color-secondary-600": "84 154 43", // #549a2b
		"--color-secondary-700": "70 128 36", // #468024
		"--color-secondary-800": "56 103 29", // #38671d
		"--color-secondary-900": "46 84 24", // #2e5418
		// tertiary | #98a027 
		"--color-tertiary-50": "240 241 223", // #f0f1df
		"--color-tertiary-100": "234 236 212", // #eaecd4
		"--color-tertiary-200": "229 231 201", // #e5e7c9
		"--color-tertiary-300": "214 217 169", // #d6d9a9
		"--color-tertiary-400": "183 189 104", // #b7bd68
		"--color-tertiary-500": "152 160 39", // #98a027
		"--color-tertiary-600": "137 144 35", // #899023
		"--color-tertiary-700": "114 120 29", // #72781d
		"--color-tertiary-800": "91 96 23", // #5b6017
		"--color-tertiary-900": "74 78 19", // #4a4e13
		// success | #879943 
		"--color-success-50": "237 240 227", // #edf0e3
		"--color-success-100": "231 235 217", // #e7ebd9
		"--color-success-200": "225 230 208", // #e1e6d0
		"--color-success-300": "207 214 180", // #cfd6b4
		"--color-success-400": "171 184 123", // #abb87b
		"--color-success-500": "135 153 67", // #879943
		"--color-success-600": "122 138 60", // #7a8a3c
		"--color-success-700": "101 115 50", // #657332
		"--color-success-800": "81 92 40", // #515c28
		"--color-success-900": "66 75 33", // #424b21
		// warning | #11290e 
		"--color-warning-50": "219 223 219", // #dbdfdb
		"--color-warning-100": "207 212 207", // #cfd4cf
		"--color-warning-200": "196 202 195", // #c4cac3
		"--color-warning-300": "160 169 159", // #a0a99f
		"--color-warning-400": "88 105 86", // #586956
		"--color-warning-500": "17 41 14", // #11290e
		"--color-warning-600": "15 37 13", // #0f250d
		"--color-warning-700": "13 31 11", // #0d1f0b
		"--color-warning-800": "10 25 8", // #0a1908
		"--color-warning-900": "8 20 7", // #081407
		// error | #e53682 
		"--color-error-50": "251 225 236", // #fbe1ec
		"--color-error-100": "250 215 230", // #fad7e6
		"--color-error-200": "249 205 224", // #f9cde0
		"--color-error-300": "245 175 205", // #f5afcd
		"--color-error-400": "237 114 168", // #ed72a8
		"--color-error-500": "229 54 130", // #e53682
		"--color-error-600": "206 49 117", // #ce3175
		"--color-error-700": "172 41 98", // #ac2962
		"--color-error-800": "137 32 78", // #89204e
		"--color-error-900": "112 26 64", // #701a40
		// surface | #3e143b 
		"--color-surface-50": "226 220 226", // #e2dce2
		"--color-surface-100": "216 208 216", // #d8d0d8
		"--color-surface-200": "207 196 206", // #cfc4ce
		"--color-surface-300": "178 161 177", // #b2a1b1
		"--color-surface-400": "120 91 118", // #785b76
		"--color-surface-500": "62 20 59", // #3e143b
		"--color-surface-600": "56 18 53", // #381235
		"--color-surface-700": "47 15 44", // #2f0f2c
		"--color-surface-800": "37 12 35", // #250c23
		"--color-surface-900": "30 10 29", // #1e0a1d
		
	}
}