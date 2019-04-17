class Coordinate {
    constructor(mapHeight, mapWidth){
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
        if (this.constructor === Coordinate) {
            throw new TypeError('Abstract class "Coordinate" cannot be instantiated directly.'); 
        }
    }
}


module.exports = Coordinate;