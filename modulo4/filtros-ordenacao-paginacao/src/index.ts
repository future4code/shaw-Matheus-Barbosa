import app from './App'
import { getAllUsers } from './getAllUsers'
import { getOrderBy } from './getOrderBy'
import { getPage } from './getPages'
import { getType } from './getType'
import { getUser } from './getUser'

app.get('/getAllUsers',getAllUsers)

app.get('/getUser',getUser)

app.get('/getType/:type',getType)

app.get('/getOrderBy/:type',getOrderBy)

app.get('/getPages',getPage)