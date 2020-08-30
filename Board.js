import { Cell }  from './Cell.js'

export class Board {
    constructor(ctx="root",height=500, width=500, pixelSize=50) {
        this.height = height;
        this.width = width;
        this.pixelSize = pixelSize;
        this.rowNum = this.height / this.pixelSize;
        this.colNum = this.width / this.pixelSize;
        this.grid = []
        this.clear = "#fff";
        this.blocked = "#000";
        this.ctx = this.createContext(ctx)
    }

    newGrid() {
        for (let col = 0; col < this.colNum; col++) {
            this.grid[col] = [] 
            for (let row = 0; row < this.rowNum; row++) {
                this.grid[col][row]  = new Cell()
            }
        }
    }

    DFS() {
        let nextGrid = this.grid.map(row => [...row])
        let pixels = new Set()
        //calculate what cells i need to update
        return pixels
    }

    drawGrid(cellsToUpdate=null) {
        debugger
        if(cellsToUpdate) {
            console.log(cellsToUpdate)
            cellsToUpdate.forEach((val) => {
                this.ctx.fillStyle = val[2]
                this.ctx.beginPath();
                this.ctx.rect(val[0] * this.pixelSize, val[1] * this.pixelSize, this.pixelSize, this.pixelSize)
                this.ctx.stroke();
                this.ctx.fill();
            })
        } else {
            for(let col = 0; col < this.colNum; col++) {
                for (let row = 0; row < this.rowNum; row++) {
                    this.ctx.fillStyle = this.grid[col][row].isAccessible ? this.clear : this.blocked;
                    this.ctx.beginPath();
                    this.ctx.rect(row * this.pixelSize, col * this.pixelSize, this.pixelSize, this.pixelSize);
                    this.ctx.stroke();
                    this.ctx.fill();
    
                }
            }
        }
    }

    createContext(rootId) {
        let canvas = document.getElementById(rootId);
        canvas.width = this.width
        canvas.height = this.height
        let ctx = canvas.getContext("2d")
        return ctx
    }

}