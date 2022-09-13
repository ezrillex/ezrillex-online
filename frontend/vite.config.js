import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import {imagetools} from "vite-imagetools"
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        svelte({
            /* plugin options */
            /*hot: {
                //preserveLocalState : true
            }*/
        }),
        imagetools(),
        visualizer()
    ],
});

