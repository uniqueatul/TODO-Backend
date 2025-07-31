// 1 : - create folder 
// 2: - move into that folder
// 3: - npm init -y
// 4: - npm i express 


const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(5000 , ()=>{
    console.log("server started at port no. 5000")
});

app.get('/',(req , res) =>{
    res.send("hello ji kya haal chal  , kishe ho brother");
});

app.post('/api/car',(req, res) =>{
    const{name , course} = req.body;
    console.log(name);
    console.log(course);
    res.send("car submittted successfully.");
    
    
});



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connection successfull")
})

.catch((error) =>{
    console.log("Recived an error")
});
