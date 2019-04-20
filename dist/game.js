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
    set monster(val) {
        this.monster = val;
    }
    get monster() {
        return this.monster;
    }
    set player(val) {
        this.player = val;
    }
    get player() {
        return this.player;
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
                console.log(this.player);
                console.log(this.monster);
                map.playerMove(key.name);
                map.draw();
            }
            if (key && key.ctrl && key.name == "c") {
                process.stdin.pause();
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