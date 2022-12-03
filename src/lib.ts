async function* getFilesRecursively(
  entry: FileSystemFileHandle | FileSystemDirectoryHandle
): AsyncGenerator<File> {
  if (entry.kind === "file") {
    const file = await entry.getFile();
    if (file !== null) {
      yield file;
    }
  } else if (entry.kind === "directory") {
    for await (const handle of entry.values()) {
      yield* getFilesRecursively(handle);
    }
  }
}

export const getFilesFromDirectory = async () => {
  const directoryHandle = await window.showDirectoryPicker();
  const files: File[] = [];

  for await (const fileHandle of getFilesRecursively(directoryHandle)) {
    files.push(fileHandle);
  }

  return files;
};
