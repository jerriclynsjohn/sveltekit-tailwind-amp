const preprocess = require("svelte-preprocess");
/** @type {import('@sveltejs/kit').Config} */
const adapter = require('@sveltejs/adapter-static');
module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		amp:true,
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
