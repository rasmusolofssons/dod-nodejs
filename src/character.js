class Character {
    constructor(name){
        this.name = name;
        this.x = Math.floor(Math.random() * 10) + 1;
        this.y = Math.floor(Math.random() * 10) + 1;
    }
}


module.exports = Character;