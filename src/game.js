const Map = require('./map');
const Keypress = require('keypress');
const Player = require('./characters/player');
const Monster = require('./characters/monster');
const mapHeight = 10;
const mapWidth = 10;

class Game {
    static start() {
        let player = new Player("Rasmus", mapHeight, mapWidth);
        let monster = new Monster("Monster", mapHeight, mapWidth);
        let map = new Map(mapHeight, mapWidth, player, monster);
        map.draw();
        // make `process.stdin` begin emitting "keypress" events
        Keypress(process.stdin);

        // listen for the "keypress" event
        process.stdin.on('keypress', function (ch, key) {
            if (key) {
                map.draw(key.name);
            }
            if (key && key.ctrl && key.name == 'c') {
                process.stdin.pause();
            }
        });
        process.stdin.setRawMode(true);
        process.stdin.resume();
    }
}

module.exports = Game;