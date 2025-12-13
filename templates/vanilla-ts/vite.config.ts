// vite.config.ts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // Import the plugin
import { resolve } from "path";
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import type { Plugin } from 'vite';
import { promises as fs } from "fs";
import path from "path";

function MinifyJsonPlugin(): Plugin {
    return {
        name: "minify-json",
        apply: "build",

        async writeBundle(options) {
            const outDir = options.dir!;

            const files = await fs.readdir(outDir);

            for (const f of files) {
                if (!f.endsWith(".json")) continue;

                const file = path.join(outDir, f);

                try {
                    const content = await fs.readFile(file, "utf8");
                    const minified = JSON.stringify(JSON.parse(content));
                    await fs.writeFile(file, minified, "utf8");
                    console.log(`Minified: ${file}`);
                } catch { }
            }
        }
    };
}
const _d = {
    name:`sample`,
};
export default defineConfig({
    build: {
        cssCodeSplit: false,  // <— Forces CSS to stay inside JS files
        assetsInlineLimit: 0, // ensures CSS is imported as string
        lib: {
            //entry: resolve(__dirname, `src/index.ts`), //'src/main.ts',
            entry: {
              editor: resolve(__dirname, 'src/editor/index.ts'),
              hydrator: resolve(__dirname, 'src/hydrator/index.ts'),
              renderer: resolve(__dirname, 'src/renderer/index.ts'),
            },

            name: _d.name,//'MyTsLib',

            /* fileName: (format) => `${_d.name}.${format}.js`, //`my-ts-lib.${format}.js`, */
            // Define the file name for the output bundles. 
            // '[name]' will be replaced by the key from the 'entry' object (editor, hydrator, renderer).
            fileName: (format, entryName) => `${entryName}.${format}.js`,

            // Define the target output formats. Common formats for libraries are ES and UMD.
            formats: ['es', 'cjs'], //['es', 'umd'],
 
        },

        // Ensure external dependencies are not bundled into the output files.
        rollupOptions: {
            // Any module listed here will not be bundled. 
            // Replace 'your-linked-test-dep' with the exact package name of your linked dependency.
            external: [
                //'your-linked-test-dep',
                'content-engine-lib',
                // Keep other external libraries here if needed, e.g., 'react', 'react-dom'
            ],
        },

    },
    plugins: [dts(),
    tailwindcss(),

    viteStaticCopy({
          targets: [
            // Copy single file (exact output name)
            {
              src: resolve(__dirname, 'src/data.json'),
              dest: '.',            // outputs to dist/data.json
            },
          ],
        }),
        MinifyJsonPlugin(),

    ], // Add the plugin here


    //set..
    server: {
        //port: 5151,//5173, // Set the default port here
        watch: {
          ignored: [
            //'**/src/no-hmr-file.js', // Ignore a specific file
            //'**/src/another-ignored-folder/**', // Ignore an entire folder
            ///node_modules/, // Example: Ignore node_modules (often ignored by default)

            //set..
            //'**/test/**'
          ],
        },
    },
});