"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monster_1 = require("./characters/monster");
const potion_1 = require("./miscellaneous/potion");
class Map {
    constructor(mapHeight, mapWidth, player, monster, potion) {
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
        this.mapArray = [];
        this.player = player;
        this.monster = monster;
        this.potion = potion;
    }
    draw() {
        for (let y = 0; y < this.mapHeight; y++) {
            this.mapArray[y] = [];
            console.log();
            for (let x = 0; x < this.mapWidth; x++) {
                if (this.characterOrItemHere(this.player, y, x)) {
                    this.mapArray[y][x] = this.player;
                    process.stdout.write(this.player.symbol);
                }
                else if (this.characterOrItemHere(this.monster, y, x)) {
                    this.mapArray[y][x] = this.monster;
                    process.stdout.write(this.monster.symbol);
                }
                else if (this.characterOrItemHere(this.potion, y, x)) {
                    this.mapArray[y][x] = this.potion;
                    process.stdout.write(this.potion.symbol);
                }
                else {
                    this.mapArray[y][x] = ' ';
                    process.stdout.write('-');
                }
                process.stdout.write(' ');
            }
        }
    }
    characterOrItemHere(character, y, x) {
        if (character == null) {
            return false;
        }
        return (y === character.y && x === character.x);
    }
    checkIfPotion(nextPositionObj) {
        if (nextPositionObj instanceof (potion_1.Potion)) {
            this.player.getPotion(nextPositionObj);
            this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
            this.potion = null;
        }
    }
    playerMove(key) {
        if (key === 'right' && this.player.x < (this.mapWidth - 1)) {
            let nextPositionObj = this.mapArray[this.player.y][this.player.x + 1];
            this.checkIfPotion(nextPositionObj);
            if (nextPositionObj instanceof (monster_1.Monster)) {
                this.player.attack(this.monster);
            }
            if (nextPositionObj.symbol != this.monster.symbol) {
                this.player.x = this.player.x + 1;
            }
        }
        else if (key === 'left' && this.player.x > 0) {
            let nextPositionObj = this.mapArray[this.player.y][this.player.x - 1];
            this.checkIfPotion(nextPositionObj);
            if (nextPositionObj instanceof (monster_1.Monster)) {
                this.player.attack(this.monster);
            }
            if (nextPositionObj.symbol != this.monster.symbol) {
                this.player.x = this.player.x - 1;
            }
        }
        else if (key === 'up' && this.player.y > 0) {
            let nextPositionObj = this.mapArray[this.player.y - 1][this.player.x];
            this.checkIfPotion(nextPositionObj);
            if (nextPositionObj instanceof (monster_1.Monster)) {
                this.player.attack(this.monster);
            }
            if (nextPositionObj.symbol != this.monster.symbol) {
                this.player.y = this.player.y - 1;
            }
        }
        else if (key === 'down' && this.player.y < (this.mapHeight - 1)) {
            let nextPositionObj = this.mapArray[this.player.y + 1][this.player.x];
            this.checkIfPotion(nextPositionObj);
            if (nextPositionObj instanceof (monster_1.Monster)) {
                this.player.attack(this.monster);
            }
            if (nextPositionObj.symbol != this.monster.symbol) {
                this.player.y = this.player.y + 1;
            }
        }
    }
}
exports.default = Map;
//# sourceMappingURL=map.js.map