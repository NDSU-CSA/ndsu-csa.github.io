import React from 'react';


class NavBody extends React.Component {
    constructor(props) {
        super(props);
    }
    
    slideDown() {

    }

    slideUp() {
        
    }

    render() {
        return (
            <div class="nav-body">
                {this.props.children}
            </div>
        )
    }
}

export default NavBody;