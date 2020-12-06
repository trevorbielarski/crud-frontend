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
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/AlbumServiceTest" className="navbar-brand">Album Management App</a></div> /* Change github repo name! */ 
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent