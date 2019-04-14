class Character {
    constructor(name, mapHeight, mapWidth){
        this.name = name;
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
        this.health = 20;
    }

     attack(character)
    {
        character.health -= 2;
    }
}


module.exports = Character;