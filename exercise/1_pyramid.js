console.log("Chapter 1 - Pyramid")

const level = 10

for (let i = 0; i < level; i++) {
  let row = "# "
  for (let j = 0; j < i; j++) {
    row += "# "
  }
  console.log(row)
}
