import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HeaderComponent from './always_visible/header.component';
import ContentComponent from './always_visible/content.component';

const App: React.FC = () => {

  return (

    <main className="container">
      <BrowserRouter>

        <Route path="/" component={HeaderComponent}></Route>
        <Route path="/" component={ContentComponent}></Route>

      </BrowserRouter>
    </main>
  
  );
  
}

export default App;
