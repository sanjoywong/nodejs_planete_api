
const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";

let db = new sqlite3.Database(dbname,(err)=>{
    if(err) throw err; 
    console.log("Base de nonnée initialisé dans le fichier :" + dbname);
});

//db.run("drop table planetes");

//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT,nom varchar(25),img varchar(255),created_at datetime default current_timestamp not null);');

/* db.run("insert into planetes(nom,img) values(?,?)",["Venus","https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"]);
db.run("insert into planetes(nom,img) values(?,?)",["Terre","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png/280px-Earth_by_the_EPIC_Team_on_21_April_2018.png"]);
db.run("insert into planetes(nom,img) values(?,?)",["Mercure","https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/800px-Mercury_in_color_-_Prockter07_centered.jpg"]);  
db.run("insert into planetes(nom,img) values(?,?)",["Mars","https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/280px-Mars_Valles_Marineris_EDIT.jpg"]);
 */
 
//db.run("create unique index rowid on planetes(name)");
//db.run("drop index rowid ");
//db.run("alter table planetes drop rowid ");

db.all("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data);
}); 


/* db.each("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.name,data.size);
}); */
console.log("la premiere ligne :")
db.get("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.nom,data.img);
});
//db.run("delete from planetes");