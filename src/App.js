import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ListAlbumComponent from './components/ListAlbumComponent'; 
import CreateAlbumComponent from './components/CreateAlbumComponent'; 
import ViewAlbumComponent from './components/ViewAlbumComponent'; 

function App() {
  return (
    <div className="dark-bg-white-text">
      <Router>
        <div className="container">
          <Switch>
            <Route path="/crud-frontend/" exact component={ListAlbumComponent}></Route>
            <Route path="/crud-frontend/albums" exact component={ListAlbumComponent}></Route>
            <Route path="/crud-frontend/add-album/:id" exact component={CreateAlbumComponent}></Route>
            <Route path="/crud-frontend/view-album/:id" exact component={ViewAlbumComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;