export {};

type DirectoryPickerOptions = {
  id: string;
  mode: "read" | "readwrite";
  startIn: string;
};

declare global {
  interface FileSystemFileHandle {
    values: () => Iterable<FileSystemFileHandle>;
  }

  interface FileSystemDirectoryHandle {
    values: () => Iterable<FileSystemDirectoryHandle>;
  }

  interface Window {
    showDirectoryPicker: (
      options?: Partial<DirectoryPickerOptions>
    ) => Promise<FileSystemDirectoryHandle>;
  }
}
