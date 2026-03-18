import fs from "node:fs";

let [, , input, output] = process.argv;

if (!input || !output) {
  console.error("Usage: node src/build_mobile_tex.mjs <input.tex> <output.tex>");
  process.exit(1);
}

let tex = fs.readFileSync(input, "utf8")
  .replace(
    "natbib}",
    "natbib}\n\\usepackage[a5paper, left=5mm, right=5mm]{geometry}"
  )
  .replace("setmonofont.Scale=0.8.", "setmonofont[Scale=0.75]");

fs.writeFileSync(output, tex);
