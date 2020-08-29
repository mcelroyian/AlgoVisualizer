export class Cell {
    constructor(isAccesable=true) {
        this.isAccesable = isAccesable
        this.isVisited = false
    }

    visit() {
        this.isVisited = true
    }

    reset() {
        this.isVisited = false
    }


}