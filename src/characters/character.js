const Coordinate = require('../miscellaneous/coordinate');

class Character extends Coordinate {
    constructor(name, mapHeight, mapWidth){
        super(mapHeight,mapWidth);
        if (this.constructor === Character) {
            throw new TypeError('Abstract class "Character" cannot be instantiated directly.'); 
        }

        this.name = name;
        this.health = 20;
    }

     attack(character)
    {
        character.health -= 5;
    }
}


module.exports = Character;