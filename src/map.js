class Map {
    constructor(mapHeight, mapWidth, player, monster){
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
        this.mapArray = [];
        this.player = player;
        this.monster = monster;
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
        this.playerMove(key);

         for(let y = 0; y < this.mapHeight; y++){
            this.mapArray[y] = [];
             for(let x = 0; x < this.mapWidth; x++){
             
                if(this.characterHere(this.player, y, x)){
                    this.mapArray[y][x] = this.player.symbol;
                } 
                else if(this.characterHere(this.monster, y, x)) {
                    this.mapArray[y][x] = this.monster.symbol;
                    }
                 else{
                    this.mapArray[y][x] = ' ';
                 }
             }
         }
         console.info(this.mapArray);
    }

     characterHere(character, y, x){
        return (y === character.y && x === character.x);

    }

    playerMove(key){
        if(key === 'right' && this.player.x < (this.mapWidth -1)){
            this.player.x = this.player.x + 1;
        }
        else if (key === 'left' && this.player.x > 0){
            this.player.x = this.player.x -1;

        }
        else if (key === 'up' && this.player.y > 0){
            this.player.y = this.player.y-1;

        }
        else if (key === 'down' && this.player.y < (this.mapHeight -1)){
            this.player.y = this.player.y +1;
        }

        if(this.canAttackMonster()){
            this.player.attack(this.monster);
        }
    }

    canAttackMonster(){
        console.log(this.player);
        console.log(this.monster);

        if(this.player.x == this.monster.x && this.player.y == this.monster.y){
            return true;
        }

        return false;
    }
}

module.exports = Map;