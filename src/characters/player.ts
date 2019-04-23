import { Character } from "./character";
import { Potion } from "../miscellaneous/potion";

export class Player extends Character{
    symbol: string;
    inventory: Array<Potion>;
    constructor(name : string, mapHeight: number, mapWidth: number){
        super(name, mapHeight, mapWidth);
        this.symbol = 'p';
        this.inventory = [];
    }

    getPotion(potion : Potion){
        this.inventory.push(potion);
    }
}
