import { Board }  from './Board.js'

let gameBoard = new Board('root',500, 500, 50)

gameBoard.newGrid()
gameBoard.drawGrid()
let cellsToDraw = [[0,1,"red"],[3,5,"blue"]]
gameBoard.drawGrid(cellsToDraw)
gameBoard.BFT()

console.log(gameBoard)