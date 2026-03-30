//req.params (URL se data lena)

app.get('/user/.id', (req, res) =>{
    const userId = req.params.id;
    res.send(`user id is${userId}`);
});

// . req.query (URL ke ? se data lena)

app.get('/search', (req,res) => {
    const name = req.query.name;
    res.send(`serching for ${name}`);
});

