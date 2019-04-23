import { Monster } from "./characters/monster";
import { Potion } from "./miscellaneous/potion";
import { Player } from "./characters/player";
import { Coordinate } from "./miscellaneous/coordinate";
import { Character } from "./characters/character";


export default class Map {
    mapHeight: number;
    mapWidth: number;
    potion: Potion;
    mapArray: Array<object>;
    player: Player;
    monster: Monster;

    constructor(mapHeight, mapWidth, player, monster, potion){
        this.mapHeight = mapHeight;
        this.mapWidth = mapWidth;
        this.mapArray = [];
        this.player = player;
        this.monster = monster;
        this.potion = potion;
    }

    draw (){
         for(let y = 0; y < this.mapHeight; y++){
            this.mapArray[y] = [];
            console.log();
             for(let x = 0; x < this.mapWidth; x++){
             
                if(this.characterOrItemHere(this.player, y, x)){
                    this.mapArray[y][x] = this.player;
                    process.stdout.write(this.player.symbol);
                } 
                else if(this.characterOrItemHere(this.monster, y, x)) {
                    this.mapArray[y][x] = this.monster;
                    process.stdout.write(this.monster.symbol);
                    }
                else if(this.characterOrItemHere(this.potion, y, x)) {
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

     characterOrItemHere(character : Coordinate, y : number, x : number){
         if(character == null){
             return false;
         }
        return (y === character.y && x === character.x);
    }

    checkIfPotion(nextPositionObj){
        if(nextPositionObj instanceof(Potion)){
            this.player.getPotion(nextPositionObj);
            this.mapArray[nextPositionObj.y][nextPositionObj.x] = null;
            this.potion = null;
        }
    }

    playerMove(key : string){
        if(key === 'right' && this.player.x < (this.mapWidth -1)){
            let nextPositionObj = this.mapArray[this.player.y][this.player.x +1];
            this.checkIfPotion(nextPositionObj);

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }
            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.x = this.player.x + 1;
            }
        }
        else if (key === 'left' && this.player.x > 0){
            let nextPositionObj = this.mapArray[this.player.y][this.player.x -1];
            this.checkIfPotion(nextPositionObj);


            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.x = this.player.x -1;
            }

        }
        else if (key === 'up' && this.player.y > 0){
            let nextPositionObj = this.mapArray[this.player.y -1][this.player.x];
            this.checkIfPotion(nextPositionObj);


            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.y = this.player.y-1;
            }

        }
        else if (key === 'down' && this.player.y < (this.mapHeight -1)){
            let nextPositionObj =  this.mapArray[this.player.y +1][this.player.x]
            this.checkIfPotion(nextPositionObj);

            if(nextPositionObj instanceof(Monster)){
                this.player.attack(this.monster);
            }

            if(nextPositionObj.symbol != this.monster.symbol){
            this.player.y = this.player.y +1;
            }
        }
    }
}
