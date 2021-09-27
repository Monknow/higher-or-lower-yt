module.exports = {
<<<<<<< HEAD
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Higher or Lower YT",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
=======
	siteMetadata: {
		siteUrl: "https://peaceful-austin-24fb09.netlify.app/",
		title: "Higher or Lower YT",
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/higher-or-lower-yt-logo.png",
				name: `Higher or Lower YouTube`,
				short_name: `Higher Lower YT`,
				start_url: `/`,
				background_color: `#252422`,
				theme_color: `#fff`,
				display: `standalone`,
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@animations": path.resolve(__dirname, "src/animations"),
					"@assets": path.resolve(__dirname, "src/assets"),
					"@components": path.resolve(__dirname, "src/components"),
					"@context": path.resolve(__dirname, "src/context"),
					"@data": path.resolve(__dirname, "src/data"),
					"@functions": path.resolve(__dirname, "src/functions"),
					"@global": path.resolve(__dirname, "src/global"),
					"@hooks": path.resolve(__dirname, "src/hooks"),
					"@pages": path.resolve(__dirname, "src/pages"),
				},
				extensions: [],
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
	],
>>>>>>> ec221d3 (Se ha añadido iconos y banners de compartir)
};
