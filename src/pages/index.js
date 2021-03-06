import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>My name is Albert. A full-stack developer living in Texas.</h2>
            {/* <p>Need a developer? <a href="/contact">Contact me.</a></p> */}
            {/* if you're linking to an EXTERNAL site, you can use an <a> just fine,
            but for all LOCAL pages, we can take advantage of React's Link component */}
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage;
// when it comes to PAGE CREATION, the src/pages/ directory
// is where gatsby looks when it's figuring out what STATIC pages
// your site needs; all the files in the pages directory will be
// the pages for our site