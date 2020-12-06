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
            <Route path="/AlbumServiceTest" exact component={ListAlbumComponent}></Route>
            <Route path="/AlbumServiceTest/albums" exact component={ListAlbumComponent}></Route>
            <Route path="/AlbumServiceTest/add-album/:id" exact component={CreateAlbumComponent}></Route>
            <Route path="/AlbumServiceTest/view-album/:id" exact component={ViewAlbumComponent}></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;