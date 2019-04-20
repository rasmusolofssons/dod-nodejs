"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Potion {
    constructor(name, mapHeight, mapWidth) {
        this.name = name;
        this.symbol = 'i';
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
        this.health = 0;
    }
}
exports.Potion = Potion;
//# sourceMappingURL=potion.js.map