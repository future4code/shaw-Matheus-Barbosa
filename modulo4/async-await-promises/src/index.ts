import axios from 'axios'
import { baseUrl } from './constants'

//1
//A = utilizamos o endpoint /subscribers 
//C

async function getAllUser():Promise<any>{
    const getAllUsers = async():Promise<any> =>{
        try {
            return await axios.get(`${baseUrl}/subscribers`).then(res => console.log(res.data))
    
        } catch (error) {
            return console.log('falha na requisição')
        }
    }
}

//2

const getAllUsers = async():Promise<any> =>{
    try {
        return await axios.get(`${baseUrl}/subscribers`).then(res => console.log(res.data))

    } catch (error) {
        return console.log('falha na requisição')
    }
}

//A
//B 

//3

type user = {
	id: string,
    email: string,
	name: string
	
}

const getAllUsers2 = async():Promise<any> =>{
    try {
        return await axios.get(`${baseUrl}/subscribers`).then(res => console.log(res.data))

    } catch (error) {
        return console.log('falha na requisição')
    }
}

//A é informado erro quanto ao tipo de retorno
//B Não é indicado pois não sabemos que tipo de retorno teremos em uma promise

//C
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

  //4 

  async function createNews (title : string , content : string ):Promise<void>{

    try {
        await axios.put(`${baseUrl}/news`,{
	"title": title,
	"content": content,
	"date": Date.now()
})
        
    } catch (error:any) {
        console.log(error.result?.data || error.message)
    }

  }

//5

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

  //6

  const sendNotifications2 = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };


