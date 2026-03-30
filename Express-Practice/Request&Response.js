//req.params (URL se data lena)

app.get('/user/.id', (req, res) =>{
    const userId = req.params.id;
    res.send(`user id is${userId}`);
});