import React from "react";
import {graphql} from "gatsby";

const TestPageShowPost = ({data}) => {
    return <div>BRO
        <div dangerouslySetInnerHTML={ {__html: data.allMarkdownRemark.edges[1].node.html}}/>
    </div>
}

export default TestPageShowPost;



export const TestQuery = graphql`
    query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
}

`