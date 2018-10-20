const Player = require('./src/player');
const Map = require('./src/map');


let player = new Player("Rasmus");
let map = new Map(5,5);
console.info(player);
map.draw();
