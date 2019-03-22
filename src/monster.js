const Character = require('./character');

class Monster extends Character{
    constructor(name){
        super(name);
        this.symbol = 'm';
    }
}

module.exports = Monster;