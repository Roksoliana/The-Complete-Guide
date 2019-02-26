export class Recipe{
    public name: string;
    public description: string;
    public imagePart: string;
    constructor(name:string, desc:string, imgP:string){
        this.name=name;
        this.description=desc;
        this.imagePart=imgP;
    }
}