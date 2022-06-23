import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null,
            precompress: false
        }),

        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true
        },

        // paths: {
        //     base: dev ? '' : '/JPatrick9793',
        // },
        // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
        // For example, instead of '_app', use 'app_', 'internal', etc.
        appDir: 'internal',
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
};

export default config;