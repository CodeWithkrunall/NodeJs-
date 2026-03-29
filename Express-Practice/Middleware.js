// const express = require('express');
// const app = express();

// //Middleware
// app.use((req, res, next) => {
//     console.log('Middleware chala');
//     next(); // very importent
// });
// app.get('/', (req, res) =>{
//     res.send('Home page')
// });
// app.listen(3000);



const checkUser = (req, res, next) =>{

    const isLogin = true;

    if(isLogin){
        next();
         }
         else{
            res.send('Login reqired')
         }
};
app.get('./dashboard', checkUser, (req,res) =>{
    res.send('welcome dashboard')
});