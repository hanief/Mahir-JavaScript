import fs from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";

let [, , output] = process.argv;

if (!output) {
  console.error("Usage: node src/build_epub.mjs <output.epub>");
  process.exit(1);
}

let epubDir = "epub";

async function walk(dir) {
  let entries = await fs.readdir(dir, {withFileTypes: true});
  let files = [];
  for (let entry of entries) {
    if (entry.name.startsWith(".")) continue;
    let full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function ensureDir(file) {
  await fs.mkdir(path.dirname(file), {recursive: true});
}

function mediaType(file) {
  if (file.endsWith(".svg")) return "image/svg+xml";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".jpg")) return "image/jpeg";
  throw new Error(`Unknown image type: ${file}`);
}

async function copyReferencedImages() {
  let xhtmlFiles = (await walk(epubDir)).filter(file => file.endsWith(".xhtml"));
  let seen = new Set();
  let imageRefs = [];
  for (let file of xhtmlFiles) {
    let content = await fs.readFile(file, "utf8");
    for (let match of content.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      let href = match[1];
      let source = path.normalize(path.resolve(href));
      let target = path.normalize(path.resolve(epubDir, match[1]));
      if (seen.has(target)) continue;
      seen.add(target);
      if (source != target) {
        await ensureDir(target);
        await fs.copyFile(source, target);
      }
      imageRefs.push(path.relative(epubDir, target).split(path.sep).join("/"));
    }
  }
  return imageRefs.sort();
}

async function writeContentOpf(images) {
  let items = images.map(file =>
    `    <item id="image.${path.basename(file)}" href="${file}" media-type="${mediaType(file)}"/>`
  );
  let template = await fs.readFile(path.join(epubDir, "content.opf.src"), "utf8");
  await fs.writeFile(path.join(epubDir, "content.opf"), template.replace("{{images}}", items.join("\n")));
}

async function writeArchive() {
  let zip = new JSZip();
  zip.file("mimetype", await fs.readFile(path.join(epubDir, "mimetype")), {compression: "STORE"});
  for (let file of (await walk(epubDir)).sort()) {
    let relative = path.relative(epubDir, file).split(path.sep).join("/");
    if (relative == "mimetype" || relative.endsWith(".src")) continue;
    zip.file(relative, await fs.readFile(file));
  }
  await fs.writeFile(output, await zip.generateAsync({type: "nodebuffer", compression: "DEFLATE"}));
}

let images = await copyReferencedImages();
await writeContentOpf(images);
await writeArchive();
