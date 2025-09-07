const path = require('path');
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
const Critters = require('critters');

module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			paths.appBuild = path.resolve(__dirname, 'critical');
			webpackConfig.output.path = path.resolve(__dirname, 'critical');

			webpackConfig.plugins.push(
				new PrerenderSPAPlugin({
					// 必需：指定要预渲染的路由
					routes: ['/'],
					// 必需：指定静态文件的根目录，通常是你的输出目录
					staticDir: path.resolve(__dirname, 'critical'),
					// 可选：用于渲染的无头浏览器配置
					renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
						// 确保无头浏览器有足够的时间来渲染页面
						timeout: 30000,
					}),
					async postProcess(renderedRoute) {
						const critters = new Critters({
							path: path.resolve(__dirname, 'critical'),
							preload: 'swap',
							compress: true,
							pruneSource: true,
						});

						// 用 critters 处理 prerender 完成后的 HTML
						renderedRoute.html = await critters.process(renderedRoute.html);
						return renderedRoute;
					},
				})
			);
			return webpackConfig;
		},
	},
};
