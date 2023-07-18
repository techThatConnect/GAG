
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // default options are shown
        adapter: adapter(

        ),
 
	preprocess: vitePreprocess()
}
};



export default config;
