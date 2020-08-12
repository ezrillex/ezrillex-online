import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

const Footer = () => {
    return (<MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center">
            <MDBRow>
                <MDBCol>
                    <a rel="noreferrer" href="https://www.facebook.com/ezrillex/" target="_blank" className="text-decoration-none fab mr-3 fa-facebook fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://twitter.com/ezrillex" target="_blank" className="text-decoration-none fab mr-3 fa-twitter fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCooq_4Odg6zkUauDo3X7LEA" target="_blank" className="text-decoration-none fab mr-3 fa-youtube fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/ezra-alejandro-abarca-cordova-sv" target="_blank" className="text-decoration-none fab mr-3 fa-linkedin fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://www.instagram.com/ezrillex/" target="_blank" className="text-decoration-none fab mr-3 fa-instagram fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://www.twitch.tv/ezrillex" target="_blank" className="text-decoration-none fab mr-3 fa-twitch fa-lg fa-2x"/>
                    <a rel="noreferrer" href="https://myanimelist.net/animelist/ezrillex" target="_blank" className="text-decoration-none far mr-3 fa-list-alt fa-lg fa-2x"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="footer-copyright text-center mt-3 pb-2">
                <MDBContainer fluid>
                    <span>ezrillex.online v0.3.0</span>
                </MDBContainer>
            </MDBRow>
        </MDBContainer>

    </MDBFooter>);
}

export default Footer;
