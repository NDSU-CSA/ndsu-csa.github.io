import React from 'react'

class NavHead extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return(
            <div class="nav-head">
                {this.props.children}
            </div>
        )
    }
}

export default NavHead