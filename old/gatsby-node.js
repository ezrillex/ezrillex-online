/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// fuck graphql



const path = require(`path`) // highlight-line
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions
    if (node.internal.type === `SeriesdataJson`) {
        const slug = createFilePath({ node, getNode, basePath: `seriesdata` })
        console.log(slug);
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions // highlight-line
    const result = await graphql(`
            query {
          allFile(filter: {relativeDirectory: {eq: "seriesdata"}}) {
            edges {
              node {
                childSeriesdataJson {
                  data {
                    slug
                    titulo
                    titles
                    quote_author
                    quote
                    links
                    episode_name
                    cookie_id
                    customTitleFont
                  }
                }
              }
            }
          }
        }
  `)

    // highlight-start
    result.data.allFile.edges.forEach(({ node }) => {
        createPage({
            path: node.childSeriesdataJson.data.slug,
            component: path.resolve(`./src/templates/TSerie.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.

                data: node.childSeriesdataJson.data,

                // en esto le estoy pasando el nodo entero para no tener que hacer mas queries alla? creo
            },
        })
    })
    // highlight-end
}