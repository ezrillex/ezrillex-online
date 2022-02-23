const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

var comments = {}

var prefix = "";

if(process.env.NODE_ENV !== undefined){
    prefix = "/api/v1/"
}

comments["test"] = ["test1", "test2"]
comments["test2"] = ["test1", "test2"]

app.get(prefix + '/comments/all/:serie/:episode', (req, res)=>{
    
    res.send("got it! the serie is " + req.params.serie + " and the episode is " + req.params.episode);
});

app.get(prefix + '*', (req, res)=>{
    res.send("Invalid endpoint")
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


//const id = "episode_" + params.id + "_" + episode.order;
