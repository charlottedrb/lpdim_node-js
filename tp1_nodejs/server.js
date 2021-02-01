const express = require("express")
// Créer le serveur
const app = express()
const bodyparser = require("body-parser")

let groceryList = [
    { name: "Bière", quantity: 42 },
    { name: "Papier toilette", quantity: 120 },
    { name: "Pâtes", quantity: 73 },
]

app.set("view engine", "ejs")
// route static = transformer node js en apache
app.use("/css", express.static(__dirname + "/css"))
app.use(bodyparser.urlencoded({extended: false}))

// req = request = ce qui est demandé 
// res = response = ce qu'on envoie au client

app.get("/", (req, res) => {
    res.render("index", { list: groceryList})
})

app.get("/list", (req, res) => {
    res.json(groceryList)
})


app.post("/add", (req, res) => {
    let newStuffToBuy = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    groceryList.push(newStuffToBuy)
    res.redirect("/")
})

app.listen(1337)