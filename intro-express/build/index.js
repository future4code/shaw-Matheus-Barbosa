"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("server is running");
});
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/users', (req, res) => {
    res.send(arrayUsers);
});
app.get('/posts', (req, res) => {
    res.send(arrayPosts);
});
app.get('/posts/:id', (req, res) => {
    let filterArray = arrayPosts.filter((elemento) => {
        return elemento.userId == req.params.id;
    });
    res.send(filterArray);
});
let arrayUsers = [];
let arrayPosts = [];
function addUser(id, name, phone, email, site) {
    const newUser = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        site: site
    };
    arrayUsers = [...arrayUsers, newUser];
}
function addPost(id, title, body, userId) {
    const newPost = {
        id: id,
        title: title,
        body: body,
        userId: userId
    };
    arrayPosts = [...arrayPosts, newPost];
}
addUser("1", "matheus", "33562171", "matheus@matheus", "www.matheus");
addUser("2", "ana", "33562171", "ana@luiza", "www.analuiza");
addPost('111', 'mecanica', 'vamos aprender mecanica', '1');
addPost('122', 'instagram', 'vamos fazer fofoca', '2');
