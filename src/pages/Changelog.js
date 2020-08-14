import React from "react"
import { Jumbotron, Container } from "react-bootstrap";

import Layout from "../components/layout"
import PageName from "../components/PageName";

const ChangelogPage = () => (
    <Layout pageInfo={{ pageName: "ChangelogPage" }}>
        <PageName pTitle="Changelog"/>
        <Container>
            <Jumbotron>

                <h4>[Unreleased] v0.3.2</h4>
                <ul>
                    <li>Deploy BDRip of UBW.</li>
                    <li>Transcode web-optimized UBW BDrip. (5/26)</li>
                    <li>Markdown-based blog.</li>
                    <li>Changed episode names to a dropdown list to easily jump between multiple episodes.</li>
                </ul>

                <h4>v0.3.1</h4>
                <ul>
                    <li>Implemented this changelog.</li>
                    <li>Implemented a json based series pages auto generation using Gatsby's API. Tradeoff is the loss of per page customization such as previous S;G tu tu ru when changing episodes. Increases substantially the speed at which we can deploy content.</li>
                    <li>Bugfix: json file slug field must have a / before the slug to be rooted in the page, not having it results in the page being linked in /series/ instead of the root. Added a / before the offending fields. Where this prefix comes from I have no idea.</li>
                </ul>

                <h4>v0.3.0</h4>
                <ul>
                    <li>Rewrite in Gatsby.js + React.js.</li>
                    <li>Helmet wrapper for tab titles in one line. (DRY)</li>
                    <li>Legacy redirects implemented, dropped some urls temporally.</li>
                    <li>Bugfix: custom 404 not working, implemented a manual redirect to the 404 page, this is necessary because of broken urls.</li>
                </ul>

                <h4>v0.2.1</h4>
                <ul><li>Deployed spoiler version of FSN.</li></ul>

                <h4>v0.2.0</h4>
                <ul>
                    <li>Validated cookies have unique identifiers to avoid overriding states between series.</li>
                    <li>Validated linking between pages.</li>
                    <li>Verified quotes.</li>
                    <li>Deployed low-quality bladeworks.</li>
                </ul>

                <h4>v0.1.2 - Alpha</h4>
                <ul><li>Unknown progress.</li></ul>

            </Jumbotron>
        </Container>
    </Layout>
)

export default ChangelogPage;