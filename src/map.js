const Potion = require('./miscellaneous/potion');
const Monster = require('./characters/monster');


class Map {
    constructor(mapHeight, mapWidth, player, monster, potion){
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
        this.mapArray = [];
        this.player = player;
        this.monster = monster;
        this.potion = potion;
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

    set mapArray(value) {
        this._mapArray = [];
      }
    
      get mapArray() {
        return this._mapArray
      }

    draw (key){
         for(let y = 0; y < this.mapHeight; y++){
            this.mapArray[y] = [];
            console.log();
             for(let x = 0; x < this.mapWidth; x++){
             
                if(this.characterHere(this.player, y, x)){
                    this.mapArray[y][x] = this.player;
                    process.stdout.write(this.player.symbol);
                } 
                else if(this.characterHere(this.monster, y, x)) {
                    this.mapArray[y][x] = this.monster;
                    process.stdout.write(this.monster.symbol);
                    }
                else if(this.characterHere(this.potion, y, x)) {
                    this.mapArray[y][x] = this.potion;
                    process.stdout.write(this.potion.symbol);
                    }
                 else{
                    this.mapArray[y][x] = ' ';
                   process.stdout.write('-');
                 }
                 process.stdout.write(' ');

             }
         }
    }

     characterHere(character, y, x){
         if(character == null){
             return false;
         }
        return (y === character.y && x === character.x);
    }

    playerMove(key){
        if(key === 'right' && this.player.x < (this.mapWidth -1)){
            let nextPositionObj = this.mapArray[this.player.y][this.player.x +1];
            if(nextPositionObj instanceof(Potion)){
                this.player.health += nextPositionObj.health;
                this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
                this.potion = null;
            }

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }
            
            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.x = this.player.x + 1;
            }
        }
        else if (key === 'left' && this.player.x > 0){
            let nextPositionObj = this.mapArray[this.player.y][this.player.x -1];
            if(nextPositionObj instanceof(Potion)){
                this.player.health += nextPositionObj.health;
                this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
                this.potion = null;
            }

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.x = this.player.x -1;
            }

        }
        else if (key === 'up' && this.player.y > 0){
            let nextPositionObj = this.mapArray[this.player.y -1][this.player.x];
            if(nextPositionObj instanceof(Potion)){
                this.player.health += nextPositionObj.health;
                this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
                this.potion = null;
            }

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.y = this.player.y-1;
            }

        }
        else if (key === 'down' && this.player.y < (this.mapHeight -1)){
            let nextPositionObj =  this.mapArray[this.player.y +1][this.player.x]
            if(nextPositionObj instanceof(Potion)){
                this.player.health += nextPositionObj.health;
                this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
                this.potion = null;
            }

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.y = this.player.y +1;
            }
        }
    }
}

module.exports = Map;