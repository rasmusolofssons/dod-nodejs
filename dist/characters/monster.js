"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("./character");
class Monster extends character_1.Character {
    constructor(name, mapHeight, mapWidth) {
        super(name, mapHeight, mapWidth);
        this.symbol = 'm';
    }
}
exports.Monster = Monster;
//# sourceMappingURL=monster.js.map