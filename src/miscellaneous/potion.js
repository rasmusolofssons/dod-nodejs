const Coordinate = require('./coordinate');

class Potion extends Coordinate {
    constructor(name, mapHeight, mapWidth){
        super(mapHeight,mapWidth);
        if (this.constructor === Potion) {
            throw new TypeError('Abstract class "Potion" cannot be instantiated directly.'); 
        }
        this.name = name;
        this.symbol = 'i';
    }
}


module.exports = Potion;