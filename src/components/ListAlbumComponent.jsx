import React, { Component } from 'react'
import AlbumService from '../services/AlbumService'

class ListAlbumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: []
        }

        this.addAlbum = this.addAlbum.bind(this); 
        this.editAlbum = this.editAlbum.bind(this); 
        this.deleteAlbum = this.deleteAlbum.bind(this); 
    }

    deleteAlbum(id) { // USING ALBUM INSTEAD OF ALBUMID ?????????????????????????
        AlbumService.deleteAlbum(id).then( res => { // res is the HTTP response
            this.setState({albums: this.state.albums.filter(album => album.id !== id)})
        }); 
    }

    viewAlbum(id) {
        this.props.history.push(`/AlbumServiceTest/view-album/${id}`); 
    }

    addAlbum() {
        this.props.history.push('/AlbumServiceTest/add-album/_add'); 
    }

    editAlbum(id) { // EDITING ALBUM BY ID??? 
        this.props.history.push(`/AlbumServiceTest/add-album/${id}`); 
    }

    componentDidMount() {
        AlbumService.getAllAlbums().then((res) => { 
            this.setState({ albums: res.data }); 
        }); 
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of Albums</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addAlbum}>Add Album</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Album Name</th>
                                <th>Artist Name</th>
                                <th>Genre</th>
                                <th>Release Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.albums.map(
                                    album =>
                                    <tr key={album.id}>
                                        <td>{album.albumName}</td>
                                        <td>{album.artistName}</td>
                                        <td>{album.genre}</td>
                                        <td>{album.releaseYear}</td>
                                        <td>
                                            <button onClick={ () => this.editAlbum(album.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAlbum(album.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewAlbum(album.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListAlbumComponent