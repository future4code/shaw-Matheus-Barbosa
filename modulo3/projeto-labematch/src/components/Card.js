import React from "react";
import styled from "styled-components"



const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -50px;

        .imagem{
            width: 330px;
            height: 500px;
            display: flex;
            background-color: gray;
            border-radius: 2%;
        }
        img{
            width:330px;
            height: auto;
            max-height: 500px;
            align-self: center;
            justify-self: center;       
        }
        .desc{
            display: flex;
            flex-direction: column;
            width: 330px;
            color: black;
            margin-top: -100px;

            
        }


`
const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    
`

function CardImg(props){ 
    
    

    return(
        <>
        <Card>
        <div className="imagem">
        <img src={props.photo} />
        </div>
        <div className="desc">
        <strong>{props.name},{props.age}</strong>
        <p>{props.bio}</p>
        </div>
        
        </Card>
        </>
    )
}

export default CardImg
