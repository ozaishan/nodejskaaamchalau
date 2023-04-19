var con =  require('./connection');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/assets",express.static("assets"));
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',function(req,res)
{
    res.sendFile(__dirname+'/register.html')

});
app.post('/',function(req,res){
var firstname = req.body.firstName;
var middlename = req.body.middleName;
var lastname = req.body.lastName;
var NID = req.body.nationalId;
var emaill = req.body.email;
var PN = req.body.phoneNumber;
con.connect(function(error){
if (error) throw error;
var sql = "INSERT INTO users(first_name,middle_name,last_name,national_id,email,phone_number)VALUES('"+firstname+"','"+middlename+"','"+lastname+"','"+NID+"','"+emaill+"','"+PN+"')";
con.query(sql,function(error,result){
    if (error) throw error;
    res.send('RECORD SUCCESSFULL'+ console.log("success"));
});
});
});
app.listen(5501);