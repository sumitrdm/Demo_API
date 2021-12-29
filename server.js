const express = require('express');
const app = express();

const fs = require('fs');

fs.readFile("data.json","UTF-8",(err,fileData)=>{
    if(err) throw err;
    
    app.get("/",function(request,response)
    {
    response.send(fileData);
    });
    
    console.log(fileData);
});

    
app.listen(3000,function(){
    console.log("Server starts at port 3000");
})