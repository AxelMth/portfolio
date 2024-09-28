export interface FileItem {
    type: 'file';
    name: string;
    iconUrl: string;
    action: () => void;
}