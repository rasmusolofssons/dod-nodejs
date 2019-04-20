"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const potion_1 = require("./potion");
class HealthPotion extends potion_1.Potion {
    constructor(name, mapHeight, mapWidth) {
        super(name, mapHeight, mapWidth);
        this.health = 5;
    }
}
exports.HealthPotion = HealthPotion;
//# sourceMappingURL=healthpotion.js.map