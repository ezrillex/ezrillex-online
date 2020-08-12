import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet/es/Helmet";
import data from "../data/serie_data";
import Layout from "./layout";
import {Jumbotron, Container, Row, ResponsiveEmbed, Button, Col} from "react-bootstrap";

import Cookies from "js-cookie";
import PageName from "./PageName";

const Player = ({serie, customTitleFont = ""}) => {



    useEffect(()=>{
        // do stuff here...
        updateEpisode(0);
    }) // <-- empty dependency array


    const [VideoSource, SetVideoSource] = useState("");

    const [ShowNext, SetNextState] = useState(false);
    const [ShowPrevious, SetPreviousState] = useState(false);

    const [Title, SetTitle] = useState("");
    const [EpisodeName, SetEpisodeName] = useState("");

    var currentEp = 0;

    function updateEpisode(episodeDelta) {
        // get episode from cookie if there is one
        var lastEp = Cookies.get(data[serie].cookie_id);

        if(lastEp !== undefined){
            currentEp = parseInt(lastEp);
        }else{
            currentEp = 0;
        }

        if(currentEp + episodeDelta >= 0 && currentEp + episodeDelta < data[serie].links.length){
            currentEp += episodeDelta;
            SetVideoSource(data[serie].links[currentEp]);
            // previously a call to load was here
        }

        // ocultar anterior si es el primer elemento
        if(currentEp === 0){
            SetPreviousState(false);
        }
        else{
            SetPreviousState(true);
        }

        // ocultar siguente si es el ultimo de la lista
        if(currentEp < data[serie].links.length - 1){
            SetNextState(true);
        }
        else{
            SetNextState(false);
        }

        // update title and description
        if(data[serie].titles.length > 1){
            SetTitle(data[serie].titles[currentEp]);
        }
        else{
            SetTitle(data[serie].titles[0]);
        }

        SetEpisodeName(data[serie].episode_name[currentEp]);

        // guardar ep en la cookie
        Cookies.set(data[serie].cookie_id, currentEp, {expires: 365});
    }

    function back(){
        updateEpisode(-1);
    }

    function next(){
        updateEpisode(1);
    }
    return (
        <div>
        <PageName pTitle={data[serie].titulo}/>
        <Layout pageInfo={""} >
            <Container>
                <Jumbotron className="text-center "  >
                    <h1 className={customTitleFont}>{Title}</h1>
                    <h4 className="d-inline">{data[serie].quote}</h4>
                    <h6 className="d-inline">{data[serie].quote_author}</h6>
                </Jumbotron>
                <Col>
                    <Row>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <video preload="auto" controlsList="nodownload" autoPlay controls className="NoOutline"
                                   src={VideoSource}
                                    onEnded={()=>{
                                        next();
                                    }}
                            />
                        </ResponsiveEmbed>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center ">

                        <Button onClick={back} className="btn-black far fa-arrow-alt-circle-left"
                                style={ShowPrevious? {display:'inline'} : {display:'none'}}/>

                        <span  className="ml-3 mr-3">{EpisodeName}</span>

                        <Button id="ButtonNext" onClick={next} className="btn-black fas fa-arrow-alt-circle-right"
                                style={ShowNext? {display:'inline'} : {display:'none'}} />
                    </Row>
                </Col>
            </Container>
        </Layout>
        </div>
    );
}

export default Player;





