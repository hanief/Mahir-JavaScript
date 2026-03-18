import fs from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";

let [, , output, ...files] = process.argv;

if (!output || !files.length) {
  console.error("Usage: node src/make_zip.mjs <output.zip> <file> [file...]");
  process.exit(1);
}

let zip = new JSZip();

for (let file of files) {
  let stat = await fs.stat(file);
  if (!stat.isFile()) continue;
  zip.file(file.split(path.sep).join("/"), await fs.readFile(file));
}

let archive = await zip.generateAsync({type: "nodebuffer"});
await fs.writeFile(output, archive);
