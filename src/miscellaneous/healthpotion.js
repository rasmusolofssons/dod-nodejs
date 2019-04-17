const Potion = require('./potion');

class HealthPotion extends Potion {
    constructor(name, mapHeight,mapWidth){
        super(name, mapHeight,mapWidth);
        this.health = 5;
    }
}


module.exports = HealthPotion;