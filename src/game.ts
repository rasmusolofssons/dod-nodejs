import Map from "./map";
const Keypress = require("keypress");
import { Player } from "./characters/player";
import { Monster } from "./characters/monster";
import { HealthPotion } from "./miscellaneous/healthpotion";
const mapHeight : number = 10;
const mapWidth : number = 10;

export class Game {
    healthPotion: HealthPotion;
    monster: Monster;
    player: Player;
        constructor(){
        this.player = new Player("Rasmus", mapHeight, mapWidth);
        this.monster = new Monster("Monster", mapHeight, mapWidth);
        this.healthPotion = new HealthPotion("Health Potion", mapHeight, mapWidth);
    }

     start() {
        let map = new Map(mapHeight, mapWidth, this.player, this.monster, this.healthPotion);
        map.draw();
        // make `process.stdin` begin emitting "keypress" events
        Keypress(process.stdin);
        // listen for the "keypress" event
        process.stdin.on("keypress",  ((ch, key) => {
            if (key) {
                if(this.monster.health <= 0){
                    this.end(process);
                    return;
                }
                console.clear();
                console.log(`Player Health: ${this.player.health}`);
                console.log(`Monster Health: ${this.monster.health}`);
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

     end(process){
        this.monster = null;
        console.log("You win!");
        process.stdin.pause();
    }
}