export class Cell {
    constructor(isAccessible=true) {
        this.isAccessible = isAccessible
        this.isVisited = false
    }

    visit() {
        this.isVisited = true
    }

    reset() {
        this.isVisited = false
    }


}