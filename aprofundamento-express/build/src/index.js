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
    console.log("running");
});
app.get('/ping', (req, res) => {
    res.send("pong");
});
app.post('/addAfazer', (req, res) => {
    criaAfazer(req.body.id, req.body.afazer, req.body.user);
    res.send(arrayAfazeres);
});
app.get('/filtro', (req, res) => {
    let status = req.body.status;
    res.send(buscaAfazer(status));
});
let arrayAfazeres = [];
function criaAfazer(id, afazer, user) {
    let fazer = {
        id: id,
        afazer: afazer,
        status: true,
        idUser: user
    };
    arrayAfazeres = [...arrayAfazeres, fazer];
}
function buscaAfazer(status) {
    let arrayFiltrado = arrayAfazeres.filter((elemento) => {
        return elemento.status = status;
    });
    return arrayFiltrado;
}
function editarStatus(id) {
    let array = arrayAfazeres.map((elemento) => {
        if (elemento.id === id) {
            return Object.assign(Object.assign({}, elemento), { status: !elemento.status });
        }
    });
}
