import { Recipes } from "./Recipes";


export class CreateRecipe extends Recipes{

     private name:string
     private makings : string
     private description : string
     private idCreator : string

     constructor(idCreator : string , name : string , makings : string , description : string){
        super()
        this.name = name
        this.makings = makings
        this.description = description
        this.idCreator = idCreator

        this.createRecipe(this.idCreator,this.name,this.makings,this.description)
     }


}