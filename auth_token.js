//create tranporter services
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'wishvapued@gmail.com',
            clientId: '766926008332-ej0hbj1uge4uvhrtqom8pidr20am0iqj.apps.googleusercontent.com',
            clientSecret: '7KgJOo84JjbvJ_pzPmXhWulA',
            refreshToken: '1/G2IWl2feXAXq6HTtjrMCZYBS8HcN0UDDytz52WaYnkQ'
        })
    } 
});