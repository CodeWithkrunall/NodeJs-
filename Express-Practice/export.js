export const userHandleName = (req, res)=>{
    const searching = req.params.searching;
    res.send(`this is searching${searching}`)
}