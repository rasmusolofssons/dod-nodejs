class Character {
    constructor(name){
        this.name = name;
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
}


module.exports = Character;