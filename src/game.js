const Map = require('./map');
const Keypress = require('keypress');
const Player = require('./characters/player');
const Monster = require('./characters/monster');
const mapHeight = 10;
const mapWidth = 10;

class Game {
    constructor(){
        this.player = new Player("Rasmus", mapHeight, mapWidth);
        this.monster = new Monster("Monster", mapHeight, mapWidth);
    }

    set monster(val) {
        this._monster = val;
    }

    get monster() {
        return this._monster;
      }

    set player(val) {
        this._player = val;
    }

    get player() {
        return this._player
      }

     start() {
        let map = new Map(mapHeight, mapWidth, this.player, this.monster);
        map.draw();
        // make `process.stdin` begin emitting "keypress" events
        Keypress(process.stdin);
        // listen for the "keypress" event
        process.stdin.on('keypress',  ((ch, key) => {
            if (key) {
                if(this.monster.health <= 0){
                    this.end(process);
                    return;
                }
                map.playerMove(key.name);
                if(this.canAttackMonster()){
                    this.player.attack(this.monster);
                   
                }
                map.draw(key.name);
            }
            if (key && key.ctrl && key.name == 'c') {
                process.stdin.pause();
            }
        }));
        process.stdin.setRawMode(true);
        process.stdin.resume();
    }

     canAttackMonster(){
        console.log(this.player);
        console.log(this.monster);

        if(this.player.x == this.monster.x && this.player.y == this.monster.y){
            return true;
        }

        return false;
    }

     end(process){
        this.monster = null;
        console.log('You win!');
        process.stdin.pause();
    }
}

module.exports = Game;