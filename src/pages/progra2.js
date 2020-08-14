import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import Layout from "../components/layout"
import PageName from "../components/PageName";

const Progra2Redir = () => (
    <Layout pageInfo={{ pageName: "Progra2" }}>
        <PageName/>
        <Container>
            <Jumbotron className="text-center">
                <h1>Esta siendo redireccionado al sitio de Azure, para continuar haga clic en el enlace...</h1>
                <a href="http://prograii.azurewebsites.net/">http://prograii.azurewebsites.net/</a>
            </Jumbotron>
        </Container>
    </Layout>
)

export default Progra2Redir;
