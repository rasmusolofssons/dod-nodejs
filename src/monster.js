const Character = require('./character');

class Monster extends Character{
    constructor(name, mapHeight, mapWidth){
        super(name,mapHeight, mapWidth);
        this.symbol = 'm';
    }
}

module.exports = Monster;