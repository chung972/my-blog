import React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <ul>
                <li>
                    <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>
                </li>
                <li>
                    <a href="https://www.keyhero.com/" target="_blank" rel="noopener noreferrer">KeyHero</a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
                </li>
            </ul>
        </Layout>

    )
}

export default ContactPage;