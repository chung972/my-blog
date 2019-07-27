import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

// this file will be where we handle ALL configurations to the head of each page;
// you can change the favicon by swapping out the asset in /static/

const Head = ({title}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
    );
}

export default Head;