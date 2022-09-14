const { json } = require('body-parser');
const express = require('express')
const router = express.Router()



const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";

let db = new sqlite3.Database(dbname,(err)=>{
    if(err) throw err; 
    console.log("Base de nonnée initialisé dans le fichier :" + dbname);
});


/* db.each("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.name,data.size);
}); */

/* db.get("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.nom,data.img);
}); */

router.get('/', function (req, res) {
 db.all("select * from planetes",(err,data)=>{
    if(err) throw err;
    res.send('les planetes sont :\r\n ' + JSON.stringify(data)) ;
})
})

module.exports = router