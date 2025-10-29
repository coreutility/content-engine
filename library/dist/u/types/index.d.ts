type renderer_p_TYP = {
    lib?: {
        /**`text_library` ||  `../my_libs_path/text_library/renderer/index.ts`  || `https://example.com/text_library/renderer/index.es` */
        renderer_src: string;
        /**`text_library` ||  `../my_libs_path/text_library/hydrator/index.ts`  || `https://example.com/text_library/hydrator/index.es` */
        hydrator_src: string;
        /**`text_library` ||  `../my_libs_path/text_library/editor/index.ts`  || `https://example.com/text_library/editor/index.es` */
        editor_src: string;
        /**`text_library` */
        name: string;
    }[];
    lazy_lib?: {
        /**http://localhost:5173/src/l/{*}/renderer/index.ts*/
        renderer_src: string;
        /**http://localhost:5173/src/l/{*}/hydrator/index.ts */
        hydrator_src: string;
        /**http://localhost:5173/src/l/{*}/editor/index.ts */
        editor_src: string;
    };
};
type hydrator_p_TYP = renderer_p_TYP;
type editor_p_TYP = renderer_p_TYP;
export type { renderer_p_TYP, hydrator_p_TYP, editor_p_TYP };
