import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import NavLogo from './navLogo'
import NavHead from './navHead'

const hamburgerQuery = graphql`
    query {
        hamburger: file(relativePath: { eq: "hamburger.png" }) {
            childImageSharp {
                fluid(maxWidth: 128, maxHeight: 128) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "up"
        }
    }

    render() {
        return(
            <StaticQuery
                query={hamburgerQuery}
                render={(data) => (
                    <div class="nav">
                        <NavHead>
                            <NavLogo link='/' body={this.props.siteTitle} />
                            <div 
                                class="nav-hamburger" 
                                style={{
                                    verticalAlign: "center"
                                }} 
                                onClick={
                                    () => {
                                        (this.state.value === "up") ? 
                                            this.setState({value: "down"}) : 
                                            this.setState({value: "up"});
                                    }
                                }
                            >
                                <div style={{
                                    height: "32px",
                                    width: "32px"
                                }}>
                                    <Img fluid={data.hamburger.childImageSharp.fluid} />
                                </div>
                            </div>
                        </NavHead>
                        <div className={`nav-body slide-${this.state.value}`}>
                            {this.props.children}
                        </div>
                    </div>
                )}
            />
        )
    }
}

export default Nav