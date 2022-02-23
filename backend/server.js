const { body } = require('express-validator')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

var comments = {}

var prefix = "";
if (process.env.NODE_ENV !== undefined) {
    prefix = "/api/v1"
}

app.use(bodyParser.urlencoded({ extended: true }));



app.post(
    prefix + '/comments/:serie/:episode',
    body('text').not().isEmpty().trim().escape(),
    (req, res) => {
        var serie = 0;
        var episode = 0;
        try {
            serie = parseInt(req.params.serie);
            episode = parseInt(req.params.episode);
        } catch (error) {
            //console.log(error)
            res.sendStatus(404);
        }
        const key = serie + "." + episode
        if (comments[key] === undefined) comments[key] = [];
        comments[key].push({ "user": req.body.user, "comment": req.body.comment })
        //console.log(comments)
        res.sendStatus(200)
    });

app.get(prefix + '/comments/:serie/:episode', (req, res) => {
    var serie = 0;
    var episode = 0;
    try {
        serie = parseInt(req.params.serie);
        episode = parseInt(req.params.episode);
    } catch (error) {
        //console.log(error)
        res.sendStatus(404);
    }
    const key = serie + "." + episode


    res.status = 200;
    res.send(JSON.stringify({
        "data": comments[key] || []
    }));
});

/*
app.get(prefix + '/*', (req, res)=>{
    res.send("Invalid endpoint")
});
*/
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


