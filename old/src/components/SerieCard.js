import React from "react";
import { Link } from "gatsby";
import { Card } from "react-bootstrap";
import Img from "gatsby-image";

const SerieCard = ({poster, data}) => {
    //console.log(data.slug);
    return (
        <Card className="col-md border-0 mb-3">
            <Link to={data.slug}>
                 <Img className="card-img" fluid={poster}/>
                {CardOverlay(data.message, data.msgAtBottom)}
            </Link>
        </Card>
    );
}

export default SerieCard;

function CardOverlay(msg, bottom){
    if(msg !== null){
        var cardClassNames = "card-img-overlay d-flex align-items-center ";
        if(bottom !== null && bottom === true){
            cardClassNames += " flex-column-reverse"
        }else{
            cardClassNames += " flex-column";
        }

        return <div className={cardClassNames}>
            <b className="btn btn-black rounded-pill p-2 text-white border border-white shadow-none ">{msg}</b>
        </div>
    }
    else
        return null;

}
