export class Character {
    name:string;
    strength:number;
    life:number;
    dex:number;
    speed:number;
    image:string;
    constructor(name:string,strength:number,life:number,dex:number,speed:number,image:string){
        this.name= name;
        this.strength= strength;
        this.life = life;
        this.dex= dex;
        this.speed= speed;
        this.image= image;
    }
}