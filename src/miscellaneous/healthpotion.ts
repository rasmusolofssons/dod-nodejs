import { Potion } from "./potion";

export class HealthPotion extends Potion {
    health: number;
    constructor(name : string, mapHeight: number, mapWidth: number){
        super(name, mapHeight, mapWidth);
        this.health = 5;
    }
}