import UserBusiness from "../business/userBusiness";
import UserData from "../data/userData";
import GenerateId from "../services/GenerateId";
import { HashPassword } from "../services/HashPassword";
import TokenManager from "../services/TokenManager";
import TokenServices from "../services/TokenManager";
import { app } from "./App";
import UserController from "./userController";


const userBusiness = new UserBusiness(
    new UserData(),
    new GenerateId(),
    new HashPassword(),
    new TokenManager()
)

const userController = new UserController(userBusiness)
app.post('/signup',userController.signup)