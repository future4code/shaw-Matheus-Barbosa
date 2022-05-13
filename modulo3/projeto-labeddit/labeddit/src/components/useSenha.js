import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import{goToHome,goToPage} from '../Routes/Coordinator'


 function useSenha (){

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    

    useEffect(()=>{
        if(token === null){
            goToHome(navigate)
        }
    },[navigate])

}

export default useSenha