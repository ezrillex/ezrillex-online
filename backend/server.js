const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express');
const cron = require('node-cron');
const cors = require('cors')
const app = express();
const prism = require('@prisma/client')
const { PrismaClient } = prism;
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;

var comments = {}

try {
    comments = JSON.parse(fs.readFileSync('comments.txt', 'utf8'))
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

//#region endpoints
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

app.get(prefix + '/link/:sauce', async (req, res) => {
    let sauce = "";
    try {
        sauce = req.params.sauce;

        const result = await prisma.shortenedLink.findUnique({
            where: { sauce: sauce }
        })

        res.status = 200;
        res.send({
            url: result.url
        })
    }
    catch (error) {
        res.sendStatus(404);
    }

});

app.post(prefix + '/create_short_url/', async (req, res) => {
    try {

        if(!isValidHttpUrl(req.body.url)){
            throw 'Invalid URL'
        }

        let sauce = ""
        // check if url already has been shortened
        const dupe = await prisma.shortenedLink.findUnique({
            where: {
                url: req.body.url
            }
        })
        if (dupe != null) {
            sauce = dupe.sauce;
        }
        else {
            // create if not
            sauce = await makesauce()
            const result = await prisma.shortenedLink.create({
                data: {
                    sauce: sauce,
                    url: req.body.url
                }
            })
        }
        res.status = 200;
        res.send({ sauce: sauce });
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

})
//#endregion

async function makesauce() {
    let length = 5;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }

    // check if unique
    const existing = await prisma.ShortenedLink.findUnique({
        where: {
            sauce: result
        }
    })

    // re try until you get a valid id
    if (existing != null) {
        result = await makesauce()
    }

    return result;
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

/*
app.get(prefix + '/*', (req, res)=>{
    res.send("Invalid endpoint")
});
*/
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


