const express = require('express')
const cors = require('cors')


const port = process.env.PORT || 3000
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
    "slackUsername": "atanda0x",
    "backend": true,
    "age": 20,
    "bio": "backend engineer"
    })
})

const Enum = Object.freeze({
    subtraction: "subtraction",
    addition: "addition",
    multiplication: "multiplication",
});

app.post('/post', (req, res) => {
    const { x, y, operation_type } = req.body;
    const operation_types = ["addition", "subtraction", "multiplication"];
    if (!operation_types.includes(operation_type)) {
      return res
        .status(400)
        .json({ message: "Invalid operation type provided." });
    }
    let result;
    switch (operation_type) {
      case "addition":
        result = x + y;
        break;
      case "subtraction":
        result = x - y;
        break;
      case "multiplication":
        result = x * y;
        break;
      default:
        break;
    }
  
    if (!result) {
      return res
        .status(400)
        .json({ message: "Can't proceed with request because input is empty." });
    } else {
      return res
        .status(200)
        .json({ slackUsername: "atanda0x", operation_type, result });
    }
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})