const Character = require('./character');

class Player extends Character{
    constructor(name, mapHeight, mapWidth){
        super(name,mapHeight, mapWidth);
        this.symbol = 'p';
        this.inventory = [];
    }
}

module.exports = Player;