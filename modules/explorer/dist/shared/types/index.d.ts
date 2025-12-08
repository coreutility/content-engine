type _p_TYP = {
    f: {
        name: (v: string) => string;
        get_lib: (v: {
            name: string;
            run_from: any;
        }) => any;
        set_theme: (v: {
            name: string;
            el_id: string;
        }) => any;
        path: (v: string) => string;
    };
};
type _$p_TYP = {
    data: {
        curr: {
            id: string;
            type: "explorer";
            data: {
                data: any;
                theme?: 'light' | 'dark';
                title?: string;
                files?: FileItem[];
                activeFile?: string;
                expandedFolders?: string[];
                foo?: {
                    txt?: string;
                };
            };
        };
    };
};
type _$cb_TYP = {
    change: (_v: {
        _$p: _$p_TYP;
    }) => any;
    add: (_v: {
        $d: _$p_TYP[`data`][`curr`][`data`];
        el: HTMLElement;
    }) => any;
};
type FileItem = {
    id: string;
    name: string;
    type: 'file' | 'folder';
    extension?: string;
    path: string;
    children?: FileItem[];
    /**
     @url Data remote source.
     @data Data direct object.
     */
    content?: {
        config: {
            lazy_lib?: {
                renderer_src: string;
                hydrator_src: string;
                editor_src: string;
            };
        };
        data: {
            l: any[];
        };
    } | any;
    icon?: string;
};
type FileOperations = {
    findFile: (id: string) => FileItem | null;
    removeFile: (id: string) => void;
    updateFile: (id: string, updates: Partial<FileItem>) => void;
};
export type { _p_TYP, _$p_TYP, _$cb_TYP, FileItem, FileOperations };
