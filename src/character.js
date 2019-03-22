class Character {
    constructor(name, mapHeight, mapWidth){
        this.name = name;
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
    }
}


module.exports = Character;