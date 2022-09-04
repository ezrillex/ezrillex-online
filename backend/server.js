const bodyParser = require('body-parser')
const fs = require('fs')
const express = require('express');
const cron = require('node-cron');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8000;


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    path: "/api/v1/",
    port: PORT
})


var visitors = 0

var comments = {}

var shortened_links = {}

try {
    comments = JSON.parse(fs.readFileSync('comments.txt', 'utf8'))
} catch (err) {
    console.log("Error when loading comments from text:")
    console.error(err)
}

try {
    shortened_links = JSON.parse(fs.readFileSync('shortened_links.txt', 'utf8'))
} catch (err) {
    console.log("Error when loading shortened links from text:")
    console.error(err)
}

cron.schedule('*/5 * * * *', (date) => {
    console.log("Backing up data - " + date)
    fs.writeFileSync('comments.txt', JSON.stringify(comments))
    fs.writeFileSync('shortened_links.txt', JSON.stringify(shortened_links))
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

    // why am I sending ok when it's not ok!!!!
    res.status = 200;
    res.send(comments[key] || []);
});

app.get(prefix + '/link/:sauce', async (req, res) => {
    let sauce = "";
    try {
        sauce = req.params.sauce;

        let result = shortened_links[sauce];

        if (result === undefined) {
            res.sendStatus(404);
        }
        else{
            res.status = 200;
            res.send({
                url: result
            })
        }
    }
    catch (error) {
        res.sendStatus(500);
    }

});

app.post(prefix + '/create_short_url/', async (req, res) => {
    try {

        if (!isValidHttpUrl(req.body.url)) {
            throw 'Invalid URL'
        }

        let sauce = ""
        // check if url already has been shortened ERROR Prisma not supported on hosting, lacks dependency.
        // compromise: instead of iterating through the entire list I have to go for duplicates unfortunately.

        sauce = await makesauce()

        shortened_links[sauce] = req.body.url
        
        res.status = 200;
        res.send({ sauce: sauce });
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

})

io.on('connection', (socket) => {
    visitors++
    io.emit("update",visitors)
    //console.log("connected")
    socket.on('disconnect', () => {
        visitors--
        io.emit("update",visitors)
        //console.log("disconnected")

    });
});
//#endregion

async function makesauce() {
    // stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    let length = 5;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }

    // check if unique
    if (shortened_links[result] === undefined) {
        return result;
    } else {
        // re try until you get a non duplicated sauce
        result = await makesauce()
        return result
    }
}

function isValidHttpUrl(string) {
    // stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
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
server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); // change app to server


