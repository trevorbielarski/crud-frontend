import React, { Component } from 'react'
import AlbumService from '../services/AlbumService'

class ViewAlbumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id, 
            album: {}
        }
    }

    componentDidMount() {
        AlbumService.getAlbumById(this.state.id).then( res => {
            this.setState({album: res.data}); 
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3 dark-bg-white-text">
                    <h3 className="text-center">Album Information</h3>
                    <div className="card-body">
                        <div className="row">
                            <div className="mb-2"><span className="font-weight-bold">Artist Name: </span>{ this.state.album.artistName }</div>
                        </div>
                        <div className="row">
                            <div className="mb-2"><span className="font-weight-bold">Album Name: </span>{ this.state.album.albumName }</div>
                        </div>
                        <div className="row">
                            <div className="mb-2"><span className="font-weight-bold">Genre: </span>{ this.state.album.genre }</div>
                        </div>
                        <div className="row">
                            <div><span className="font-weight-bold">Release Year: </span>{ this.state.album.releaseYear }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewAlbumComponent