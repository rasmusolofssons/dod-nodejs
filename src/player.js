const Character = require('./character');

class Player extends Character{
    constructor(name){
        super(name);
        this.symbol = 'p';
    }
}

module.exports = Player;