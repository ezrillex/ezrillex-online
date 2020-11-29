import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Container } from "react-bootstrap";
import Layout from "../components/layout"
import PageName from "../components/PageName";

const InfoPage = () => (
    <Layout pageInfo={{ pageName: "InfoPage" }}>
        <PageName pTitle="Contacto"/>
        <Container>
            <Jumbotron>
                <h1>Información.</h1>
                <address>
                    El Salvador, San Salvador. <br/>
                    Email: <a href="mailto:ezra@ezrillex.online">ezra@ezrillex.online</a> <br/>
                    Discord: Ezra#3905 <br/>
                    Estudiante de Licenciatura en Informática. <br/>
                    Bilingüe (Ingles-Español).<br/>
                    C#, Python, Beginner Fullstack. <br/>
                </address>
                <br/>
                <Link to="/">Volver al Inicio</Link>
            </Jumbotron>
            
        </Container>
    </Layout>
)

export default InfoPage;
