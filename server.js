const express = require('express');
const app = express();

const fs = require('fs');

fs.readFile("data.json","UTF-8",(err,fileData)=>{
    if(err) throw err;

    console.log(fileData);
});

app.get("/",function(request,response)
{
response.send("<h1>Data Fetched!</h1>");

});

app.listen(3000,function(){
    console.log("Server starts at port 3000");
})