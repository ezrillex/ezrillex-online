import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import DefaultDance from "../images/default_dance.gif";
import PageName from "../components/PageName";

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>
    <PageName/>
    <Container className="text-center">

        <img src={DefaultDance} alt="Default Dance Gif" />
        <h2>En Construccion...</h2>

    </Container>
  </Layout>
)

export default IndexPage;


/*<Img fluid={data.headhunterImage.childImageSharp.fluid} width="30%" alt="Headhunter art" />
export const query = graphql `query {
   headhunterImage: file(relativePath: {eq: "HH.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`*/