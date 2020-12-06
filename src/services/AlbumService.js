import axios from 'axios'; 

const ALBUM_API_BASE_URL = "http://albumcrudtest3-env.eba-ubhrhzmu.us-east-1.elasticbeanstalk.com"; 

class AlbumService { 

    addAlbum(album) {
        return axios.post(ALBUM_API_BASE_URL + '/saveAlbum', album); 
    }

    getAlbumById(albumId) {
        return axios.get(ALBUM_API_BASE_URL + '/getAlbum/' + albumId); 
    }

    getAllAlbums() {
        return axios.get(ALBUM_API_BASE_URL + '/getAllAlbums'); 
    }

    deleteAlbum(album) { // USING ALBUM INSTEAD OF ALBUMID
        return axios.delete(ALBUM_API_BASE_URL + '/deleteAlbum', album); 
    }

    updateAlbum(album) { // NOT USING ALBUMID - DOES IT MATTER THAT THERE'S NO ID IN THE PATH? 
        return axios.put(ALBUM_API_BASE_URL + '/updateAlbum', album); 
    }

}

export default new AlbumService()