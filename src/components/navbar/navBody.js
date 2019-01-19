import React from 'react';


class NavBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "up"
        };
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
        return (
            <div className={`nav-body ${this.getPositionClass(this.state.value)}`}>
                {this.props.children}
            </div>
        )
    }
}

export default NavBody;