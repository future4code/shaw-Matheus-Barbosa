import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { base } from "../constants/BASE_URL";
import { goToHome } from "../Routes/Coordinator";
import CardPost from "./CardPost";

const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    width: 100%;
    height: 5em;
    margin-bottom: 1em;
        h3{
            margin: 1em;
            color: red;
        }
        button{
            margin: 1em ;
        }
`

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`

const Comentar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

        input{
            width: 80%;
            height: 8em;
            border-radius: 5%;
            border-style: none;
            background-color: aliceblue;
            
            
        }

        button{
            width: 80%;
            height: 3em;
            background-color: blueviolet;
            border-style: none;
            border-radius: 5%;
            color: white;
            font-weight: bold;
            margin: 1em;
            :hover{
                background-color: lightblue;
            }
        }
`

function FeedPage (){

    const [textoPost,setTextoPost] = useState("")
    const [posts,setPosts] = useState([])
    const navigate = useNavigate()

    const goLogout = () =>{
     goToHome(navigate)   
    }

    
    useEffect(()=>{

         const auth = {
             headers:{
                "Authorization":localStorage.getItem("token")
             }
         }

         

        axios.get(`${base}/posts`,auth).then((res)=>{
            console.log(res)
            setPosts(res.data)
        }).catch((err)=>{
            console.log(err)
        })

        
    },[])
   
    const imprimePosts = posts.map((elemento)=>{
        return <CardPost id={elemento.id} nome={elemento.username} body={elemento.body}/>
    })

    const onClickPostar =()=>{

        const body = {
            "title": "postagem",
            "body": textoPost
        }

        const auth = {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }

            axios.post(`${base}/posts`,body,auth).then((res)=>{
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
    }

    
    
    return(
        <>
         <Cabecalho>
             <h3>Labeddit</h3>
             <button
             onClick={goLogout}
             >Logout</button>
         </Cabecalho>
         <Comentar>
            <input
            placeholder="Postagem" 
            type="text"
            value={textoPost}
            onChange={(event)=>setTextoPost(event.target.value)}
            />
            <button
            onClick={onClickPostar}
            >Postar</button>
         </Comentar>
        <Posts>
        {imprimePosts}

        </Posts>
        
        </>
        
    
    )
}
    

    


export default FeedPage