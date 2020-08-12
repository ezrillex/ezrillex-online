import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";


const CustomNavbar = ({ pageInfo }) => {

    const data = useStaticQuery( graphql `query {
     LetterBrandLogo: file(relativePath: {eq: "favicon.png"}) {
      childImageSharp {
        fixed(width:30, height:30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return (

      <Navbar bg="black" variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <Img fixed={data.LetterBrandLogo.childImageSharp.fixed}
                 className="d-inline-block align-bottom" />
                 {' '}ezrillex.online</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>

              <Link to="/" className="link-no-style">
                  <Nav.Link as="span" eventKey="index">
                      Inicio
                  </Nav.Link>
              </Link>


            <Link to="/series" className="link-no-style">
              <Nav.Link as="span" eventKey="SeriesPage">
                Series
              </Nav.Link>
            </Link>

            <Link to="/Info" className="link-no-style">
              <Nav.Link as="span" eventKey="InfoPage">
                Info
              </Nav.Link>
            </Link>
          </Nav>

            {/*Search and button go here, but I don't want fake Place holders RN*/}

        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

  );
}

export default CustomNavbar;

/*<Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button variant="dark">Fake Button</Button>
            </Form>


          </Nav>*/