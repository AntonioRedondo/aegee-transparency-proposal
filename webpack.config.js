const fs = require("fs");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

const postcssImport = require("postcss-import");
const assets = require("postcss-assets");
const autoprefixer = require("autoprefixer");
const preCss = require("precss");
const cssNano = require("cssnano");

function includeHtmlSections(sections) {
	return sections.reduce((acc, section) => acc.concat({ search: `@@include('${section}.htm')`, strict: false, replace: fs.readFileSync(__dirname + `/src/htm/${section}.htm`).toString() }), [])
		.concat({ search: /(<!-- buildDev:start (\s|\S)*?<!-- buildDev:end -->)/, strict: false, replace: "" })
		.concat({ search: /(<!-- buildGulp:start (\s|\S)*?<!-- buildGulp:end -->)/, strict: false, replace: "" })
		.concat({ search: /(<!-- buildGulp2:start (\s|\S)*?<!-- buildGulp2:end -->)/, strict: false, replace: "" });
}

module.exports = {
	mode: "production",
	entry: "./src/js/index.webpack.js",
	output: {
		path: __dirname + "/docs"
	},
	devtool: "source-map",
	devServer: {
		index: "index.htm",
		contentBase: "./docs",
		hot: true,
		stats: {
			children: false,
			maxModules: 0
		},
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// "style-loader",
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							// ident: "postcss", //Not rally needed https://webpack.js.org/configuration/module/#useentry
							plugins: () => [
								postcssImport(), // functionality already provided by css-loader but PostCSS plugin needed because if not a "Right now, PostCSS does nothing." error is thrown
								preCss({ features: { "color-mod-function": { unresolved: "warn" } } }),
								autoprefixer(),
								assets({ loadPaths: ["src"] }),
								cssNano()
							]
						}
					},
				]
			},
			{
				test: /\.htm$/,
				use: [
					{
						loader: "html-loader",
						options: {
							attributes: false,
							minimize: true
						}
					},
					{
						loader: "webpack-atomizer-loader",
						options: {
							configPath: path.resolve("./atomCssConfig.js")
						}
					},
					{
						loader: "string-replace-loader",
						options: {
							multiple: includeHtmlSections(["intro", "who-we-are", "activities", "the-board", "join-us", "faq", "contact", "footer", "top-bar"])
						}
					}
				]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./src/favicon.ico", to: "favicon.ico" },
				{ from: "./src/CNAME", to: "./" },
				{ from: "./src/img/*", to: "./img/", flatten: true }
			]
		}),
		new HtmlWebpackPlugin({
			template: "./src/htm/index.htm",
			filename: "index.htm",
			inlineSource: ".(js|css)$", // html-webpack-inline-source-plugin option
		}),
		new MiniCssExtractPlugin(),
		new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
		new HtmlWebpackInlineSVGPlugin({
			inlineAll: true
		})
	]
};
