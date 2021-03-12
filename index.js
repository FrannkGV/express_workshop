const express = require('express')
const app = express();

/* 
verbos HTTP
GET
POST
PATH
PUT
DELETE
*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Welcome!")
});

app.listen(3000, () =>{
    console.log("Server is running");
});