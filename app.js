const Player = require('./src/player');
const Map = require('./src/map');
const Keypress = require('keypress');


let player = new Player("Rasmus");
let map = new Map(5,5);
console.info(player);
map.draw();

// make `process.stdin` begin emitting "keypress" events
Keypress(process.stdin);
 
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    if(key){
        map.draw(key.name);
    }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
process.stdin.setRawMode(true);
process.stdin.resume();
 

