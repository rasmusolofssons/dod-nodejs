const Character = require('./character');

class Player extends Character{
    constructor(name){
        super(name);
    }
}

module.exports = Character;