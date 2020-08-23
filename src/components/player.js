import React, { useState, useEffect } from "react"
import {
  Jumbotron,
  Container,
  Row,
  ResponsiveEmbed,
  Button,
  Col,
} from "react-bootstrap"
import Cookies from "js-cookie"

const Player = ({ data }) => {
  console.log("player code was executed");
  useEffect(() => {
    updateEpisode(0);
    SetSeleccion(currentEp);
  });

  const [SeleccionLista, SetSeleccion] = useState("")
  const [VideoSource, SetVideoSource] = useState("")
  const [ShowNext, SetNextState] = useState(false)
  const [ShowPrevious, SetPreviousState] = useState(false)
  const [Title, SetTitle] = useState("")
  //const [EpisodeName, SetEpisodeName] = useState("")

  var currentEp = 0

  var opciones = [];
  for(var i = 0; i < data.episode_name.length; i++){
    opciones.push(<option key={i.toString()} value={i}>{data.episode_name[i]}</option>);
  }

  function handleChange(event) {
    updateEpisode(0, event.target.value);
    SetSeleccion(event.target.value);
  }

  function updateEpisode(episodeDelta, forcedIndex=undefined) {
    //console.log("episode update called")


    // get episode from cookie if there is one
    var lastEp = Cookies.get(data.cookie_id);

    if (lastEp !== undefined) {
      currentEp = parseInt(lastEp)
    } else {
      currentEp = 0
    }

    if(forcedIndex !== undefined){
      currentEp = parseInt( forcedIndex);
    }

    if (
      currentEp + episodeDelta >= 0 &&
      currentEp + episodeDelta < data.links.length
    ) {
      currentEp += episodeDelta
      SetVideoSource(data.links[currentEp])
      // previously a call to load was here
    }

    // ocultar anterior si es el primer elemento
    if (currentEp === 0) {
      SetPreviousState(false)
    } else {
      SetPreviousState(true)
    }

    // ocultar siguente si es el ultimo de la lista
    if (currentEp < data.links.length - 1) {
      SetNextState(true)
    } else {
      SetNextState(false)
    }

    // update title and description
    if (data.titles.length > 1) {
      SetTitle(data.titles[currentEp])
    } else {
      SetTitle(data.titles[0])
    }

    // SetEpisodeName(data.episode_name[currentEp])

    // guardar ep en la cookie
    Cookies.set(data.cookie_id, currentEp, { expires: 365 })
  }

  function back() {
    updateEpisode(-1)
  }

  function next() {
    updateEpisode(1)
  }


  return (
    <Container>
      <Jumbotron className="text-center ">
        <h1 className={data.customTitleFont}>{Title}</h1>
        <h4 className="d-inline">{data.quote}</h4>
        <h6 className="d-inline">{data.quote_author}</h6>
      </Jumbotron>
      <Col>
        <Row>
          <ResponsiveEmbed aspectRatio="16by9">
            <video
              preload="auto"
              controlsList="nodownload"
              autoPlay
              controls
              className="NoOutline"
              src={VideoSource}
              onEnded={() => {
                next();
              }}

            />
          </ResponsiveEmbed>
        </Row>

        <Row className="d-flex justify-content-center align-items-center mt-3 ">
          <Button
            onClick={back}
            className="btn-black far fa-arrow-alt-circle-left"
            style={ShowPrevious ? { display: "inline" } : { display: "none" }}
          />

          <form className="ml-3 mr-3">
            <select value={SeleccionLista} onChange={handleChange}>
              {opciones}
            </select>
          </form>

          <Button
            id="ButtonNext"
            onClick={next}
            className="btn-black fas fa-arrow-alt-circle-right"
            style={ShowNext ? { display: "inline" } : { display: "none" }}
          />
        </Row>
      </Col>
    </Container>
  )
}

export default Player
