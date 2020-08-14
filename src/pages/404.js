import React from "react"

import SadChems from "../images/sadchems.webp";
import {Jumbotron} from "react-bootstrap";
import Layout from "../components/layout"
import PageName from "../components/PageName";

const NotFoundPage = () => (
  <Layout>
    <PageName/>
    <Jumbotron className="text-center">
        <h1>ERROR 404 - NO ENCONTRADO</h1>
        <img src={SadChems} alt="Chemms Triste" />
    </Jumbotron>

  </Layout>
)

export default NotFoundPage;
