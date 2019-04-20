import { Coordinate } from "./coordinate";

export abstract class Potion implements Coordinate {
    x: number;
    y: number;
    name: string;
    symbol: string;
    health: number;
    constructor(name : string, mapHeight: number, mapWidth: number){
        this.name = name;
        this.symbol = 'i';
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
        this.health = 0;
    }
}

