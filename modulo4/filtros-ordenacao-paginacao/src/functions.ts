import connection from "./connect"

export  async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 export async function selectUser(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name = '${name}';
    `)
 
    return result[0]
 }
 export async function selectUserType(type:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE type = '${type}';
    `)
 
    return result[0]
 }

 export async function orderBy(type:string):Promise<any> {
    let result : any

    const tipo : string = type

    if (type === "type" || type === "name"){
    result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${tipo} ASC
    `)
    }else{
        result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        ORDER BY email ASC
     `)
    }
   
 
    return result[0]
 }

 export async function getPages(number:string):Promise<any>{
    
    const page = (Number(number)*5)-5

    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        LIMIT 5 OFFSET ${page}
    `)

    return result[0]
 }
 