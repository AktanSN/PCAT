const express = require('express')

const app = express()

const jsonSend =  { id: 1, title: "Blog title", description: "Blog description" };

app.get('/', (req, res) => {
    res.send(jsonSend);
})

const port = 3001

app.listen(port, () =>{
    console.log(port)
})