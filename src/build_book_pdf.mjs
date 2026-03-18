import {spawnSync} from "node:child_process";
import fs from "node:fs";
import path from "node:path";

let [, , name, output] = process.argv;

if (!name || !output) {
  console.error("Usage: node src/build_book_pdf.mjs <basename> <output.pdf>");
  process.exit(1);
}

function texBinDirs() {
  let dirs = ["/Library/TeX/texbin", "/usr/texbin"];
  let root = "/usr/local/texlive";
  if (fs.existsSync(root)) {
    for (let entry of fs.readdirSync(root)) {
      let binDir = path.join(root, entry, "bin", "universal-darwin");
      if (fs.existsSync(binDir)) dirs.push(binDir);
    }
  }
  return dirs;
}

let env = {
  ...process.env,
  PATH: [...texBinDirs(), process.env.PATH || ""].join(":")
};

function run(command, args) {
  let result = spawnSync(command, args, {cwd: "pdf", stdio: "inherit", env});
  if (result.error) {
    if (result.error.code == "ENOENT" || result.error.code == "EACCES") {
      console.error(`Required command is unavailable: ${command}`);
      process.exit(1);
    }
    throw result.error;
  }
  if (result.status) process.exit(result.status);
}

for (let i = 0; i < 2; i++) run("xelatex", [`${name}.tex`]);
for (let i = 0; i < 2; i++) run("makeindex", ["-o", `${name}.ind`, `${name}.idx`]);
run("xelatex", [`${name}.tex`]);

let logFile = path.join("pdf", `${name}.log`);
while (/^LaTeX Warning: Label\(s\) may have changed/m.test(fs.readFileSync(logFile, "utf8")))
  run("xelatex", [`${name}.tex`]);

fs.copyFileSync(path.join("pdf", `${name}.pdf`), output);
