var XLSX = require("xlsx");
var workbook = XLSX.readFile("UserData.xlsx");
let worksheet = workbook.Sheets[workbook.SheetNames[0]];

for(let i=3; i<4; i++){
    let us = worksheet[`B${i}`].v;
    let ps = worksheet[`C${i}`].v;
    if(username == us && password == ps){
        console.log("You logged in successfully")
    }
    else{
        console.log("Incorrect Username/Password !!!")
    }
}