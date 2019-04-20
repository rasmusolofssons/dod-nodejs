"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("./character");
class Player extends character_1.Character {
    constructor(name, mapHeight, mapWidth) {
        super(name, mapHeight, mapWidth);
        this.symbol = 'p';
        this.inventory = [];
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map