import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './components/Routes';


function App() {
  

  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
   
  );
}

export default App;
