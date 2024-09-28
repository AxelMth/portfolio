export interface FolderItem {
    type: 'folder';
    name: string;
    iconUrl: string;
    action: () => void;
}