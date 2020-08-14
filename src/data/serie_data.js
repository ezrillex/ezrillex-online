const Serie_data = {


    "template": {
        "titulo": "Title of the Show",
        "slug" : "/series/template_serie_link",
        "quote": "\"This is a quote of the series.\"",
        "quote_author" : "-Character Name",
        "cookie_id": "id_of_the_cookie_where_to_store_the_last_episode",
        "titles": [
            "Title of show, one if it's the same, multiple to change depending on the episode(redundant for same name series)"
        ],
        "links": [
            "",
            ""
        ],
        "episode_name": [
            "Episodio 1: ",
            "Episodio 2: ",
            "Episodio 3: ",
            "Episodio 4: ",
            "Episodio 5: ",
            "Episodio 6: ",
            "Episodio 7: ",
            "Episodio 8: ",
            "Episodio 9: ",
            "Episodio 10: "
        ]
    }
}


export default Serie_data;

/*
*   IN ANY CASE THAT THIS FILE GETS TOO BIG, THEN I HAVE TO CHOSE ONE OF THIS
*       1. ADD SUPPORT FOR MULTIPLE FILES AS A PROP PARAMETER, AND LOAD THE JSON GIVEN THE FILE NAME
*       2. COMPRESS THIS FILE
*       3. SERVE A MINIFIED VERSION OF THIS FILE AND USE AN EXTERNAL EDITOR TO WORK WITH THIS
* */