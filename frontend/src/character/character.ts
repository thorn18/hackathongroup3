export class Character {
    name:string;
    strength:number;
    life:number;
    dex:number;
    speed:number;
    image:string;
    constructor(name:string = "",strength:number = 0,life:number = 0,dex:number = 0,speed:number = 0,image:string = ""){
        this.name= name;
        this.strength= strength;
        this.life = life;
        this.dex= dex;
        this.speed= speed;
        this.image= image;
    }

    takeDamage(damage:number){
        this.life -= damage;
    }

}