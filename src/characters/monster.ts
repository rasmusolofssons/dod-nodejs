import { Character } from "./character";

export class Monster extends Character{
    symbol: string;

    constructor(name : string, mapHeight: number, mapWidth: number){
        super(name, mapHeight, mapWidth);
        this.symbol = 'm';
    }
}