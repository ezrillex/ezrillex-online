import React from "react"

import SadChems from "../images/sadchems.webp";

import Layout from "../components/layout"
import PageName from "../components/PageName";

const NotFoundPage = () => (
  <Layout>
      <PageName/>

    <h1>ERROR 404 - NO ENCONTRADO</h1>
    <img src={SadChems} />
  </Layout>
)

export default NotFoundPage
