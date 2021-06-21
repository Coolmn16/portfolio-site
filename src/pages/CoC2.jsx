import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import CoC2Intro from "../sections/CoC2Intro"

const CoC2 = () => (
    <Layout>
        <Seo title="CoC2" />
        <Parallax pages={2}>
            <div>
                <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
                    <Inner>
                        <Themed.h1>Corruption of Champions II</Themed.h1>
                        <Themed.p>
                            Find it on <Link to="https://store.steampowered.com/app/1292690/Corruption_of_Champions_II/">Steam</Link> or play it <Link to="https://www.fenoxo.com/play/CoC2/release/">Here</Link>.
                            </Themed.p>
                    </Inner>
                </Content>
            </div>
            <CoC2Intro offset={1} factor={1}/>
        </Parallax>
    </Layout>
)

export default CoC2
