import { Coordinate } from "../miscellaneous/coordinate";

export abstract class Character implements Coordinate {
    x: number;
    y: number;
    name: string;
    health: number;

    constructor(name : string, mapHeight: number, mapWidth: number){
        this.name = name;
        this.health = 20;
        this.y = Math.floor(Math.random() * mapHeight);
        this.x = Math.floor(Math.random() * mapWidth);
    }

     attack(character : Character)
    {
        character.health -= 5;
    }
}