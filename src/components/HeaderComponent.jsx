import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props) 

        this.state = {}

    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-black">
                        <div><a href="/album-crud-frontend/" className="navbar-brand">View All Albums</a></div> 
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent