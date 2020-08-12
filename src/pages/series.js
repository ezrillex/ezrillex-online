import React from "react";
import { CardColumns } from "react-bootstrap";
import Layout from "../components/layout";
import SerieCard from "../components/SerieCard";
import SGPoster from "../images/posters/steinsgate.jpg"
import FZeroPoster from "../images/posters/fatezero.jpg"
import ErasedPoster from "../images/posters/erased.jpg"
import StayNightPoster from "../images/posters/staynight.jpg"
import UBWPoster from "../images/posters/unlimitedbladeworks.jpg"
import SeriesData from "../data/serie_data";
import {Helmet} from "react-helmet/es/Helmet";
import PageName from "../components/PageName";

const SeriesPage = () => (

  <Layout pageInfo={{ pageName: "SeriesPage" }}>
      <PageName/>

    <h1 className="HomemadeApple text-center">Series</h1><br/>

  <CardColumns>
      <SerieCard alternative_text={"Steins;Gate Poster"} poster={ SGPoster } page_to_link_to={SeriesData.SteinsGate.slug} />
      <SerieCard alternative_text={"Fate/Zero Poster"} poster={ FZeroPoster } page_to_link_to={SeriesData.fatezero.slug}/>
      <SerieCard alternative_text={"Erased Poster"} poster={ ErasedPoster } page_to_link_to={SeriesData.erased.slug}/>
      <SerieCard alternative_text={"Fate/Stay Night Poster"} overlay_text={SeriesData.fatestaynightreddit.message} poster={ StayNightPoster } page_to_link_to={SeriesData.fatestaynightreddit.slug}/>
      <SerieCard alternative_text={"Fate/Stay Night Poster"} overlay_text={SeriesData.fatestaynightes.message} poster={ StayNightPoster } page_to_link_to={SeriesData.fatestaynightes.slug}/>
      <SerieCard alternative_text={"Fate/Unlimited BladeWorks Poster"} overlay_text={SeriesData.fatestaynightubw.message} poster={ UBWPoster } page_to_link_to={SeriesData.fatestaynightubw.slug}/>
  </CardColumns>

  </Layout>
)

export default SeriesPage;

