// load the express module
const express = require('express');
// load the nodemailer module
const nodemailer = require('nodemailer');
const app = express();

var transporter = nodemailer.createTransport({      
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: "wishvapued@gmail.com",
      clientId: "766926008332-ej0hbj1uge4uvhrtqom8pidr20am0iqj.apps.googleusercontent.com",
      clientSecret: "7KgJOo84JjbvJ_pzPmXhWulA",
      refreshToken: "1/G2IWl2feXAXq6HTtjrMCZYBS8HcN0UDDytz52WaYnkQ"                              
    }
  });

// var transporter = nodemailer.createTransport({      
//     host: "smtp.gmail.com",
//     auth: {
//       type: "login", // default
//       user: "wishvapued@gmail.com",
//       pass: "wishva123!@#"
//     }
//   });
// now create mail options
var mailOptions = {
    from: 'SkyMap_Admin <wishvapued@gmail.com>',
    to: 'anandwishvanath@gmail.com',
    subject: 'Nodemailer Test Api',
    text: 'some text',
    html: '<h2> Welcome Wishvanath clik this link to verify  </h2> <br/> <a href="http://localhost:5000">Verify <a/> '
};

// now send the email
transporter.sendMail(mailOptions, function(err, res){
    if(err){
        console.log(err);

    } else{
        console.log("Email sent Successfully");
    }
});


app.get('/',function(req,res){
    res.send("Response sent from the Home router");
})


app.get('/email', function(req, res){
    
})





// listen port no
app.listen(5000,() => console.log(`You are listening the PORT NO :5000`));