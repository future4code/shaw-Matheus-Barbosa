import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { base } from "../constants/BASE_URL";
import Comments from "./Comentarios";

const Card = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    border-style: none;
    border-radius: 5%;
    background-color: lightblue;
    align-items: center;
    justify-content: center;
    margin: 1em;
    flex-direction: column;
`
const User = styled.div`
    align-self: flex-start;
    font-weight: bold;
    margin: 0.5em;
`
const Corpo = styled.div`

    display: flex;
    margin: 0.5em;
    margin-top: -1.5em;

`

const ListComments = styled.div`
    display: flex;
    background-color: lightblue;
    width: 100%;
    height: auto;
    background-color: lightblue;
    border-style: none;
    border-radius: 5%;
    align-items: center;
    justify-content: center;
        div{
            width: 80%;
            height: auto;
            margin: 0.5em;
            background-color: aliceblue;
            justify-self: center;
            border-radius: 5%;
        }

`
const PostComment = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    justify-content: center;
    margin: 0 auto;

        input{
            width: 80%;
            margin-left: 7em;
        }
`
function CardPost (props){

    const [comentarios,setComentarios] = useState([])
    const [exibeComentarios,setExibeComentarios] = useState(false)
    const [postComentario,setPostComentario] = useState("")

    const getComentarios = (id) =>{

        const auth = {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }
        axios.get(`${base}/posts/${props.id}/comments`,auth).then((res)=>{
            console.log(res)
            setComentarios(res.data)
            setExibeComentarios(!exibeComentarios)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const onClickPostComment = (id) =>{
        const body={
            "body":postComentario
        }

        const auth={
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }

        axios.post(`${base}/posts/${id}/comments`,body,auth).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    let imprimeComentarios
    let postComentar

    if (exibeComentarios){
        imprimeComentarios = comentarios.map((elemento)=>{
            return <Comments nome={elemento.username} body={elemento.body} />
        })
        postComentar =(
            <PostComment>
            <input 
            placeholder="Comentar"
            value={postComentario}
            onChange={(event)=>setPostComentario(event.target.value)}
            />
            <button
            onClick={()=>onClickPostComment(props.id)}
            >Enviar</button>
            </PostComment>
        )
    }



    return(
        <Card>
        <User>  
            <p>{`${props.nome}`}</p>   
            
        </User>
        <Corpo>
            <p>{props.body}</p>
        </Corpo>

        <button
        onClick={getComentarios}
        >Comentários</button>
        <ListComments>
        <div>
        {imprimeComentarios}
        {postComentar}
        </div>
        
        </ListComments>
       
        
        </Card>

    )
}

export default CardPost