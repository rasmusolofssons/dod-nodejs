"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name, mapHeight, mapWidth) {
        this.name = name;
        this.health = 20;
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
    }
    attack(character) {
        character.health -= 5;
    }
}
exports.Character = Character;
//# sourceMappingURL=character.js.map