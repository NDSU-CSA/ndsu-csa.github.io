import React from 'react'

import NavLogo from './navLogo'
import NavHead from './navHead'

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "up"
        }
    }

    getPositionClass(state) {
        if(state === "down") {
            return "slide-down"
        }
        if(state === "up") {
            return "slide-up"
        }
    }

    render() {
        return(
            <div class="nav">
                <NavHead>
                    <NavLogo link='/' body={this.props.siteTitle} />
                    <div 
                        class="nav-hamburger" 
                        style={{
                            verticalAlign: `center`
                        }} 
                        onClick={
                            () => {
                                if(this.state.value === "up") {
                                    this.setState({value: "down"});
                                } else {
                                    this.setState({value: "up"});
                                }
                            }
                        }>
                            <div style={{
                                height: `25px`,
                                width: `25px`,
                                backgroundColor: `white`
                            }}></div>
                        </div>
                </NavHead>
                <div className={`nav-body ${this.getPositionClass(this.state.value)}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Nav