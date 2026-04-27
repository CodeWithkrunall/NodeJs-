import express from "express"

const app = express();

const PORT = 8080;

app.use(session({
    secret: "auth-token",
    resave:""
}))

app.get("/authentication", express.json(), async (req,res)=>{
    res.send("authentication");
    const {userName, Password} = res.body
})

app.listen(PORT , ()=>{
    console.log(` port is running on ${PORT}`);
})