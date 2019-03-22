const Map = require('./src/map');
const Keypress = require('keypress');
const Player = require('./src/player');
const Monster = require('./src/monster');
const mapHeight = 10;
const mapWidth = 10;

let player = new Player("Rasmus", mapHeight, mapWidth);
let monster = new Monster("Monster", mapHeight, mapWidth);
let map = new Map(mapHeight,mapWidth);
map.draw(player,monster);

// make `process.stdin` begin emitting "keypress" events
Keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    if(key){
        map.draw(player,monster, key.name);
    }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);
process.stdin.resume();
 

