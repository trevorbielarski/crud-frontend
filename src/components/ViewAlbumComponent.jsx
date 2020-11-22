import React, { Component } from 'react'
import AlbumService from '../services/AlbumService'

class ViewAlbumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albumId: this.props.match.params.albumId, 
            album: {}
        }
    }

    componentDidMount() {
        AlbumService.getAlbumById(this.state.albumId).then( res => {
            this.setState({album: res.data}); 
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Album Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Album Name: </label>
                            <div>{ this.state.album.albumName }</div>
                        </div>
                        <div className="row">
                            <label>Artist Name: </label>
                            <div>{ this.state.album.artistName }</div>
                        </div>
                        <div className="row">
                            <label>Genre: </label>
                            <div>{ this.state.album.genre }</div>
                        </div>
                        <div className="row">
                            <label>Release Year: </label>
                            <div>{ this.state.album.releaseYear }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewAlbumComponent