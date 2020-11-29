import React from "react";
import {Helmet} from "react-helmet/es/Helmet";

const PageName = ({pTitle}) => {

    if(pTitle === undefined){
        pTitle = "ezrillex.online";
    }

    return <Helmet>
        <title>{pTitle}</title>
    </Helmet>
}
export default PageName;