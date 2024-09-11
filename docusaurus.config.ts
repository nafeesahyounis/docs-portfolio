import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"
import type * as Plugin from "@docusaurus/types/src/plugin"
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs"

export default {
	title: "Paydock Documentation",
	tagline: "Payments Decoded",
	favicon: "img/favicon.ico",

	url: "https://paydock.gitlab.io",
	baseUrl: "/",
	trailingSlash: false,
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					routeBasePath: "/", // Serve the docs at the site's root
					sidebarPath: "./sidebars.ts",
					breadcrumbs: true,
					admonitions: {
						keywords: ["emphasise"],
						extendDefaults: true
					},
					docItemComponent: "@theme/ApiItem"
				},

				blog: false,
				theme: {
					customCss: ["./src/styles/custom.scss"]
				}
			}
		]
	],

	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				docsRouteBasePath: "/",
				searchBarShortcut: true
			}
		],
		[
			"docusaurus-plugin-openapi-docs",
			{
				id: "openapi",
				docsPluginId: "classic",
				config: {
					core: {
						specPath: "src/openapi/core/openapi.yaml",
						outputDir: "docs/api/core",
						sidebarOptions: {
							groupPathsBy: "tag",
							categoryLinkSource: "tag"
						},
						hideSendButton: false,
						showSchemas: false
					} satisfies OpenApiPlugin.Options
				} satisfies Plugin.PluginOptions
			}
		],
		"@docusaurus/theme-live-codeblock",
		"docusaurus-plugin-sass"
	],

	themes: ["docusaurus-theme-openapi-docs"],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			// Replace with your project's social card
			image: "img/paydock-social-card.png.jpg",
			navbar: {
				logo: {
					alt: "Site Logo",
					src: `/logos/paydock.svg`,
					srcDark: `/logos/paydock.svg`,
					href: "/",
					target: "_self",
					width: 139,
					height: 28
				},
				hideOnScroll: false,

				items: [
					{
						type: "doc",
						docId: "getting-started/overview",
						label: "Setup",
						position: "left"
					},
					{
						type: "doc",
						docId: "integration/overview",
						label: "Integration",
						position: "left"
					},
					{
						type: "search",
						position: "right"
					},
					{
						label: "SDK & API",
						position: "right",
						items: [
							{
								type: "doc",
								docId: "api/core/paydock-api",
								label: "API"
							},
							{
								type: "doc",
								docId: "sdk/client-sdk/index",
								label: "Client-SDK"
							},
							{
								type: "doc",
								docId: "sdk/mobile-sdk/index",
								label: "Mobile-SDK"
							}
						],
						className: "navbar__link--support"
					},
					{
						label: "Help",
						position: "right",
						items: [
							{
								href: "/",
								label: "Help Center",
								target: "_blank",
								rel: null
							},
							{
								href: "/",
								label: "Customer Support",
								target: "_blank",
								rel: null
							}
						],
						className: "navbar__link--support"
					}
				]
			},
			footer: {
				style: "light",
				links: [],
				copyright: `Copyright © ${new Date().getFullYear()} Paydock`
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				additionalLanguages: ["javascript", "powershell", "http", "json", "java", "python", "jq"]
			},
			colorMode: {
				defaultMode: "light",
				disableSwitch: true,
				respectPrefersColorScheme: false
			},
			liveCodeBlock: {
				playgroundPosition: "bottom"
			}
		}
} satisfies Config
