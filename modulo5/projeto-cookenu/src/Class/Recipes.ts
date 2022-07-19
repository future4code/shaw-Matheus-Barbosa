import { v4 } from "uuid";
import { BaseDatabase } from "./BaseDataBase";


export class Recipes extends BaseDatabase{

    constructor(){
        super()
    }

    async getRecipes () : Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM Recipes_cookenu
        `)

        return result[0]
    }

    async deleteRecipe (id:string) : Promise<void>{
        this.connection.raw(`
            DELETE * FROM Recipes_cookenu
            WHERE id = '${id}'
        `)
    }

    protected async createRecipe(idCreator :string ,name : string , makings :string , description :string) : Promise<void> {

        const id = v4()

        await this.connection.raw(`
            INSERT INTO Recipes_cookenu (id,name,makings,description,idcreator)
            VALUES ('${id}','${name}','${makings}','${description}','${idCreator}')
        `)
    }

    async getAllRecipesById (id:string) : Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM Recipes_cookenu 
            WHERE idcreator = '${id}'
        `)
        return result[0]
    }

    async selectRecipeById (id:string) : Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Recipes_cookenu 
            WHERE id = '${id}';
        `)

        return result
    }

    async editRecipeById (idCreator :string , id : string ,name : string , makings :string , description :string) : Promise<void>{
        await this.connection.raw(`
            UPDATE Recipes_cookenu SET
            name = '${name}' , makings = '${makings}' , description = '${description}'
            WHERE id = ${id}
        `)
    }
    
    async searchRecipes (search : any) : Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Recipes_cookenu
            WHERE name LIKE '%${search}%'
        `)

        return result[0]
    }


}