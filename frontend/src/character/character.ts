export class Character {
    charName:string;
    charStrength:number;
    charHp:number;
    charDex:number;
    // charSpeed:number;
    charImage:string;
    constructor(name:string = "",strength:number = 0,life:number = 0,dex:number = 0,speed:number = 0,image:string = ""){
        this.charName= name;
        this.charStrength= strength;
        this.charHp = life;
        this.charDex= dex;
        // this.charSpeed= speed;
        this.charImage= image;
    }

    takeDamage(damage:number){
        this.charHp -= damage;
    }

}