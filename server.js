const express = require('express')
const importData = require("./data.json") 

const port = process.env.PORT || 5000

const app = express();

app.get('/', (req, res)=>{
    res.json(importData)
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})