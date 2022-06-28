import { profile } from "console";
import app from "./App";
import { login, signup } from "./endPoints";
import { generateId,createUser ,generateToken, getUserByEmail} from "./functions";

app.post('/user/signup',signup)

app.post('/user/login',login)

app.get('/user/profile',profile)