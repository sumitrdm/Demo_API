const express = require('express');
const app = express();

const fs = require('fs');

fs.readFile("data.json","UTF-8",(err,fileData)=>{
    if(err) throw err;

    console.log(fileData);
});

app.get("/",function(request,response)
{
response.send([
    {
    "id": "1",
    "motorStart": "1032,50",
    "motorEnd": "1032,50",
    "TxStartAt": "06:31:59,16.12.21",
    "TxEndAt": "07:31:39,16.12.21",
    "totalUtilization": "0,50",
    "cost": "0,14"
},
{
    "id": "2",
    "motorStart": "1032,50",
    "motorEnd": "1032,50",
    "TxStartAt": "06:31:59,16.12.21",
    "TxEndAt": "07:31:39,16.12.21",
    "totalUtilization": "0,50",
    "cost": "0,14"
},
{
    "id": "3",
    "motorStart": "1032,50",
    "motorEnd": "1032,50",
    "TxStartAt": "06:31:59,16.12.21",
    "TxEndAt": "07:31:39,16.12.21",
    "totalUtilization": "0,50",
    "cost": "0,14"
},
{
    "id": "4",
    "motorStart": "1032,50",
    "motorEnd": "1032,50",
    "TxStartAt": "06:31:59,16.12.21",
    "TxEndAt": "07:31:39,16.12.21",
    "totalUtilization": "0,50",
    "cost": "0,14"
}
]);

});

app.listen(3000,function(){
    console.log("Server starts at port 3000");
})