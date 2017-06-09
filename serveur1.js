var express = require('express');
var app = express();
app.set('view engine', 'ejs');

//app.use(express.static('public'));
        
app.listen(8080, function () {
    console.log("page chargée");
});

        var ClientList = [{

    position: "0",
    firstName: "John", 
    lastName : "Doe", 
    email: "john@gmail.com", 
    phone: "0612457845"
},
{
    position :"1",
    firstName: "Don",
    lastName : "Draper",
    email: "don@gmail.com",
    phone: "0654453587"
},
{
    position : "2",
    firstName: "Jon",
    lastName : "Snow",
    email: "snow@gmail.com",
    phone: "0854357845"
}];

app.get('/read', function (req, res) {
    res.render('page1', {ClientList : ClientList});
});


    app.get('/add', function (req, res) {
    console.log (req.query.firstName +req.query.lastName + req.query.email + req.query.phone);
        
        var client ={
        position : req.query.position,
        firstName : req.query.firstName,
        lastName : req.query.lastName,
        email : req.query.email,
        phone : req.query.phone    
};

        ClientList.push(client);
  
        res.render('page1', {ClientList : ClientList});
});

    app.get('/delete', function (req, res) {
    console.log (req.query.position);
    ClientList.splice(req.query.position,1);
    res.render('page1', {ClientList : ClientList});

});


   app.get('/update', function (req, res) { 
       clienList[req.query.i] = res.query;

  //clientList[req.query.i][req.query.property] = req.query.value;
  /*
  if(req.query.property == "firstName") {
    ClientList[req.query.i].firstName = req.query.value;
  }
  if(req.query.property == "lastName") {
    ClientList[req.query.i].lastName = req.query.value;
  }
  if(req.query.property == "email") {
    ClientList[req.query.i].email = req.query.value;
  }   
  if(req.query.property == "phone") {
    ClientList[req.query.i].phone = req.query.value;
  }    */

  res.render('page1', {ClientList : ClientList});
});