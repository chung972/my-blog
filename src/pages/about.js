import React from "react";
import {Link} from "gatsby";

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>I am a developer now</p>
            <Link to="/contact">Contact me.</Link>
        </div>
    )
}

export default AboutPage;