const Player = require('./player');
const Monster = require('./monster');

class Map {
    constructor(mapHeight, mapWidth){
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
    }

    draw (player, monster, key){
        this.playerMove(player, key);
      console.log('Key: ' + key);
        console.log(`Player X: ${player.x} \n Player Y: ${player.y}`);
        //console.log(`Monster X: ${monster.x} \n Monster Y: ${monster.y}`);
         let map = [];

         for(let y = 0; y < this.mapHeight; y++){
            map[y] = [];
             for(let x = 0; x < this.mapWidth; x++){
             
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

    playerMove(player, key){
        if(key === 'right' && player.x < (this.mapWidth -1)){
            player.x = player.x + 1;
        }
        else if (key === 'left' && player.x > 0){
            player.x = player.x -1;
        }
        else if (key === 'up' && player.y > 0){
            player.y = player.y-1;
        }
        else if (key === 'down' && player.y < (this.mapHeight -1)){
            player.y = player.y +1;
        }
    }
}

module.exports = Map;