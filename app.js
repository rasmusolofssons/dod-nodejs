const Map = require('./src/map');
const Keypress = require('keypress');
const Player = require('./src/player');
const Monster = require('./src/monster');

let player = new Player("Rasmus");
let monster = new Monster("Monster");
let map = new Map(10,10);
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
 

