import { FileItem } from './types';
export declare const findFileById: (id: string, items: FileItem[]) => FileItem | null;
export declare const removeFileById: (id: string, items: FileItem[]) => boolean;
export declare const collectAllFiles: (items: FileItem[]) => FileItem[];
