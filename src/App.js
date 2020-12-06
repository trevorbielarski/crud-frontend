import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import ListAlbumComponent from './components/ListAlbumComponent'; 
import HeaderComponent from './components/HeaderComponent'; 
import FooterComponent from './components/FooterComponent'; 
import CreateAlbumComponent from './components/CreateAlbumComponent'; 
import ViewAlbumComponent from './components/ViewAlbumComponent'; 

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/react-frontend/" exact component={ListAlbumComponent}></Route>
            <Route path="/react-frontend/albums" exact component={ListAlbumComponent}></Route>
            <Route path="/react-frontend/add-album/:id" exact component={CreateAlbumComponent}></Route>
            <Route path="/react-frontend/view-album/:id" exact component={ViewAlbumComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;