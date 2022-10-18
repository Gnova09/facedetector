const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const app = express();

app.use(bodyParser.json())

const users = [
    {
        id: "1",
        name: "jhon",
        lastname: "doe",
        email: "jhonn.doe@gmail.com",
        password: "123",
        entries: 0,
        joined: new Date()
    },
    {
        id: "2",
        name: "juan",
        lastname: "perez",
        email: "juan.perez@gmail.com",
        password: "124",
        entries: 0,
        joined: new Date()
    }
]

////CONECTING////////////
app.listen(3000, () => {
    console.log("listen server in port 3000")
})

app.get("/", (req, res) => {
    res.json("success")
})

/////////VERIFICACION LOGIN///////
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    let userFound = false;

    users.map((user) => {
        if (user.email === email) {
            userFound = true;
            bcrypt.compare(password, user.password, function (err, result) {
                // result == true
                result === true ? res.json("succes") : res.json("Wrong credentials");
            });
        }
    })
    if (!userFound) {
        res.status(400).json("Not found");
    }
})

//////RETORNAR USUARIOS///////////
app.get("/api/users", (req, res) => {
    res.json(users)
})
//////CREAR NUEVO USUARIO////////
app.post('/register', (req, res) => {

    const { name, lastname, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        // Store hash in your password DB.  
        users.push(
            {
                id: "3",
                name: name,
                lastname: lastname,
                email: email,
                password: hash,
                entries: 0,
                joined: new Date()
            }
        )
        res.json(users[users.length - 1])
    });
})

///////OBTENER DATOS DE UN USUARIO///////////
app.get("/api/profile/:id", (req, res) => {
    const { id } = req.params;
    let userFound = false;

    users.map((user) => {
        if (user.id === id) {
            userFound = true;
            return res.json(user);
        }
    })
    if (!userFound) {
        res.status(400).json("Not found");
    }
})