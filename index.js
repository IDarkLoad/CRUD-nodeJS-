const express = require("express");

const server = express();

server.use(express.json());

const cursos = ['Desenvolvedor Front-end','Desenvolvedor React-Native','UX Designer'];

//Return unit
server.get('/cursos/:index', (req, res)=> {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//Return all units
server.get('/cursos',(req, res) => {
    return res.json(cursos);
});

//Create new units
server.post('/cursos',(req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Update a unit
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

//Delete a unit
server.delete('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: 'A unidade foi deletada'});
});











server.listen(3000);