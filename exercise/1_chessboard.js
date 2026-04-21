console.log("Chapter 1 - Chessboard")

function chessboard(size) {
  let board = ""

  for (let i = 0; i < size; i++) {
    let row = ""
    const isEvenRow = i % 2 == 0
    const evenChar = isEvenRow ? "#" : " "
    const oddChar = isEvenRow ? " " : "#"
    for (let j = 0; j < size; j++) { 
      if (j % 2 == 0) {
        row += evenChar
      } else {
        row += oddChar
      }
    }
    row += "\n"
    board += row
  }
  return board
}

console.log(chessboard(10))
