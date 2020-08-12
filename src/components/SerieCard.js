import React from "react";
import { Link } from "gatsby";
import { Card } from "react-bootstrap";

const SerieCard = ({page_to_link_to, poster, alternative_text, overlay_text, putatbottom}) => {
    return (
        <Card className="col-md border-0 mb-3">
            <Link to={page_to_link_to}>
                <img className="card-img" src={poster}
                     alt={alternative_text}/>
                {CardOverlay(overlay_text, putatbottom)}
            </Link>
        </Card>
    );
}

export default SerieCard;

function CardOverlay(text_prop, topbot){
    if(text_prop !== undefined){
        var cardClassNames = "card-img-overlay d-flex align-items-center ";
        if(topbot !== undefined){
            if(topbot === true){
                cardClassNames += " flex-column-reverse"
            }
        }else{
            cardClassNames += " flex-column";
        }

        return <div className={cardClassNames}>
            <b className="btn btn-black rounded-pill p-2 text-white border border-white shadow-none ">{text_prop}</b>
        </div>
    }
    else
        return null;

}