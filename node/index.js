const express = require('express')
const app = express()
const port = 3000
const mysql      = require('mysql');


const connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'root',
  database : 'node-db'
});

let peoples = [];
let listaNomes = ['Olinda Gouveia', 'Aline Magalhães', 'Alonso Maciel', 'Nicollas Capistrano', 'Mouhamed Bentes']
 
connection.connect();


connection.query('CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))', function (error, results, fields) {
  if (error) throw error;
  console.log('Table people created');
});
 


app.get('/', (req, res) => {


  let randomNome = listaNomes[listaNomes.length * Math.random() | 0];
  let sqlInsert = `INSERT INTO people(name) values("${randomNome}")`;

  connection.query(sqlInsert, function (error, results, fields) {
    if (error) throw error;
    console.log('1 record inserted');
  });
  
  
  
  connection.query('select * from people', function (error, results, fields) {
    if (error) throw error;
    peoples = JSON.parse(JSON.stringify(results));
  });


  let resp = "<h1>FullCycle Rocks!</h1>"
  
  if (peoples.length>0){
    resp += "<ul>"

    peoples.forEach(element => {
      resp += "<li>" + element.name + "</li>"
    });

    resp += "</ul>"   

  }
  
  res.send(resp)
  
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})