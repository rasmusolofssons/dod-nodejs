"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("./map");
const Keypress = require("keypress");
const player_1 = require("./characters/player");
const monster_1 = require("./characters/monster");
const healthpotion_1 = require("./miscellaneous/healthpotion");
const mapHeight = 10;
const mapWidth = 10;
class Game {
    constructor() {
        this.player = new player_1.Player("Rasmus", mapHeight, mapWidth);
        this.monster = new monster_1.Monster("Monster", mapHeight, mapWidth);
        this.healthPotion = new healthpotion_1.HealthPotion("Health Potion", mapHeight, mapWidth);
    }
    start() {
        let map = new map_1.default(mapHeight, mapWidth, this.player, this.monster, this.healthPotion);
        map.draw();
        // make `process.stdin` begin emitting "keypress" events
        Keypress(process.stdin);
        // listen for the "keypress" event
        process.stdin.on("keypress", ((ch, key) => {
            if (key) {
                if (this.monster.health <= 0) {
                    this.end(process);
                    return;
                }
                console.clear();
                console.log(`Player Health: ${this.player.health}`);
                this.player.inventory.length > 0 ? console.log(`Player Inventory: ${this.player.inventory[0].name} (U to use) `) : null;
                console.log(`Monster Health: ${this.monster.health}`);
                map.playerMove(key.name);
                map.draw();
            }
            if (key && key.ctrl && key.name == "c") {
                process.stdin.pause();
            }
            if (key && key.name == "u") {
                if (this.player.inventory.length > 0) {
                    this.player.health += this.player.inventory.pop().health;
                }
            }
        }));
        process.stdin.setRawMode(true);
        process.stdin.resume();
    }
    end(process) {
        this.monster = null;
        console.log("You win!");
        process.stdin.pause();
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map