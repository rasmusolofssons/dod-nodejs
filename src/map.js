const Player = require('./player');
const Monster = require('./monster');

class Map {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    draw (key){
        let player = new Player("Rasmus");
        let monster = new Monster("Monster");
        console.log(`Player X: ${player.x} \n Player Y: ${player.y}`);
        //console.log(`Monster X: ${monster.x} \n Monster Y: ${monster.y}`);
         let map = [];

         for(let y = 0; y < this.height; y++){
            map[y] = [];
             for(let x = 0; x < this.width; x++){
                //  if(y === player.y && x === player.x){
                //         map[y][x] = 'p';
                //      }
                //      else if(y === monster.y && x === monster.x){
                //         map[y][x] = 'm';
                //      }
                if(this.characterHere(player, y, x)){
                    map[y][x] = player.symbol;
                } 
                else if(this.characterHere(monster, y, x)) {
                    console.log(`Monster X: ${monster.x} \n Monster Y: ${monster.y}`);
                        map[y][x] = monster.symbol;
                    }
                 else{
                    map[y][x] = ' ';
                 }
             }
         }
         console.info(map);
    }

     characterHere(character, y, x){
        return (y === character.y && x === character.x);

    }
}

module.exports = Map;