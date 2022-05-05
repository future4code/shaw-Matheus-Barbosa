import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToPage } from "../../Routes/Coordinator"
import { adminPage, loginPage } from "../constantes"


 function useSenhaProtegida (pagina){

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    

    useEffect(()=>{
        if(token === null){
            goToPage(navigate,loginPage)
        }else if (pagina === true){
            goToPage(navigate,adminPage)
        }
    },[navigate])

}

export default useSenhaProtegida