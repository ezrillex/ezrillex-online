import React from "react";
import { CardColumns } from "react-bootstrap";
import Layout from "../components/layout";
import SerieCard from "../components/SerieCard";
import PageName from "../components/PageName";
import {graphql} from "gatsby";

const SeriesPage = ({ data }) => {
    var imagenes = {}
    data.imagenesSeries.edges.forEach((imagen) => {
        imagenes[imagen.node.base] = imagen.node.childImageSharp.fluid;
    });

    var CardArray = [];
    data.datosSeries.edges.map(
        (item) =>{
            let a = item.node.childSeriesdataJson;
            CardArray.push(<SerieCard key={a.id} poster={imagenes[a.data.poster]} data={a.data}/>);
        }
    );

    return (
        <Layout pageInfo={{ pageName: "SeriesPage" }}>
            <PageName/>
            <h1 className="HomemadeApple text-center">Series</h1><br/>
            <CardColumns>
                {CardArray}
            </CardColumns>
        </Layout>
    )
}


export default SeriesPage;

export const query = graphql`
query  {
  datosSeries: allFile(filter: {relativeDirectory: {eq: "seriesdata"}}) {
    edges {
      node {
        childSeriesdataJson {
          data {
            slug
            titulo
            poster
            message
            msgAtBottom
          }
          id
        }
      }
    }
  }
  imagenesSeries: allFile(filter: {relativeDirectory: {eq: "posters"}}) {
    edges {
      node {
        base
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
}
`



/*<SerieCard alternative_text={"Steins;Gate Poster"} poster={ SGPoster } page_to_link_to={SeriesData.SteinsGate.slug} />
      <SerieCard alternative_text={"Fate/Zero Poster"} poster={ FZeroPoster } page_to_link_to={SeriesData.fatezero.slug}/>
      <SerieCard alternative_text={"Erased Poster"} poster={ ErasedPoster } page_to_link_to={SeriesData.erased.slug}/>
      <SerieCard alternative_text={"Fate/Stay Night Poster"} overlay_text={SeriesData.fatestaynightreddit.message} poster={ StayNightPoster } page_to_link_to={SeriesData.fatestaynightreddit.slug}/>
      <SerieCard alternative_text={"Fate/Stay Night Poster"} overlay_text={SeriesData.fatestaynightes.message} poster={ StayNightPoster } page_to_link_to={SeriesData.fatestaynightes.slug}/>
      <SerieCard alternative_text={"Fate/Unlimited BladeWorks Poster"} overlay_text={SeriesData.fatestaynightubw.message} poster={ UBWPoster } page_to_link_to={SeriesData.fatestaynightubw.slug}/>*/