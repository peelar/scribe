import { createSignal } from "solid-js";
import { getFilesFromDirectory } from "~/lib";

export default function Home() {
  const [files, setFiles] = createSignal<File[]>([]);

  const loadFilesFromDirectory = async () => {
    const loadedFiles = await getFilesFromDirectory();
    setFiles(loadedFiles);
  };

  const isFiles = files.length > 0;
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      {!isFiles && (
        <button class="p-4 bg-slate-300" onClick={loadFilesFromDirectory}>
          Choose directory
        </button>
      )}
      <ul>
        {files().map((file) => (
          <li>{file.name}</li>
        ))}
      </ul>
    </main>
  );
}
