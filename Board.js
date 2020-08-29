import { Cell }  from './Cell.js'

export class Board {
    constructor(height, width, pixelSize) {
        this.height = height;
        this.width = width;
        this.pixelSize = pixelSize;
        this.rowNum = this.height / this.pixelSize;
        this.colNum = this.width / this.pixelSize;
        this.grid = []
    }

    newGrid() {
        for (let col = 0; col < this.colNum; col++) {
            this.grid[col] = [] 
            for (let row = 0; row < this.rowNum; row++) {
                this.grid[col][row]  = new Cell()
            }
        }
    }

    updateGrid() {
        let pixels = new Set()
        //calculate what cells i need to update
        return pixels
    }

    drawGrid(cellsToUpdate) {

    }

}