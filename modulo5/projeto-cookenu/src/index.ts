
import { app } from "./Class/App";
import { signup } from "./Endpoints/Signup";
import { login } from "./Endpoints/Login";
import { getProfileByToken } from "./Endpoints/getProfileByToken";
import { getUserbyId } from "./Endpoints/getUserbyId";
import { createRecipe } from "./Endpoints/createRecipe";
import { getRecipeById } from "./Endpoints/getRecipeById";
import { getAllRecipes } from "./Endpoints/getAllRecipes";
import { getAllRecipesByUser } from "./Endpoints/getAllRecipesbyUser";
import { searchRecipeByName } from "./Endpoints/searchRecipeByName";
import { deleteUserRecipe } from "./Endpoints/deleteUserRecipe";
import { editRecipe } from "./Endpoints/editRecipe";
import { application } from "express";
import { verifyUser } from "./Data/verifyUser";
import { User } from "./Class/User";
import { follows } from "./Endpoints/follows";
import { createFollow } from "./Endpoints/createFollow";
import { unFollow } from "./Endpoints/unFollow";
import { isFollow } from "./Endpoints/isFollow";
import { getFollowers } from "./Endpoints/getFollowers";



app.post('/user/signup', signup)

app.post('/user/login', login)

app.get('/user/myProfile', getProfileByToken)

app.get('/user/:id',getUserbyId)

app.post('/user/createRecipe', createRecipe)

app.get('/user/getRecipe/:id', getRecipeById)

app.delete('/user/recipes/:id', deleteUserRecipe)

app.post('/editRecipe/:id',editRecipe)

app.get('/getAllRecipes',getAllRecipes)

app.get('/getAllRecipes/:id',getAllRecipesByUser)

app.get('/searchRecipe',searchRecipeByName)

app.get('/user/follows',follows)

app.post('/user/follow/:id',createFollow)

app.post('/user/unfollow/:id',unFollow)

app.get('/user/isfollow/:id',isFollow)

app.get('/user/getFollows',getFollowers)

