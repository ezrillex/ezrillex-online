const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express');
const cron = require('node-cron');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8000;

var comments = {}

try {
    comments = JSON.parse( fs.readFileSync('comments.txt', 'utf8'))
} catch (err) {
    console.log("Error when loading comments from text:")
    console.error(err)
}

cron.schedule('*/5 * * * *', (date) => {
    console.log("Backing up comments - " + date)
    fs.writeFileSync('comments.txt', JSON.stringify(comments))
});


var prefix = "";
if (process.env.NODE_ENV !== undefined) {
    prefix = "/api/v1"
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()) // enables cors on all origins


app.post(
    prefix + '/comments/:serie/:episode',
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

        comments[key].unshift({ "user": req.body.user, "comment": req.body.comment })
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
    res.send(comments[key] || []);
});

/*
app.get(prefix + '/*', (req, res)=>{
    res.send("Invalid endpoint")
});
*/
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


