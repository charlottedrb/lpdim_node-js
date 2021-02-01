const express = require("express")
// Créer le serveur
const app = express()

// route static = transformer node js en apache
app.use("/css", express.static(__dirname + "/css"))

// req = request = ce qui est demandé 
// res = response = ce qu'on envoie au client

app.get("/", (req, res) => {
    console.log("racine")
    res.sendFile(__dirname + "/index.html")
})

app.get("/my-awesome-file.PDF", (req, res) => {
    console.log("autre route")
    res.sendFile(__dirname + "/index.html")
})

app.listen(1337)