import React from "react";
import Layout from "../components/layout";
import Player from "../components/player";
import PageName from "../components/PageName";

export default function Serie(props){
    var data = props.pageContext.data;
    return(
        <div>
            <PageName pTitle={data.titulo}/>
            <Layout pageInfo="">
                <Player data={data}/>
            </Layout>
        </div>
    )
}