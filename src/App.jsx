import React from 'react';
import FadeIn from 'react-fade-in';

import Page from './components/Defined/Page';
import Banner from './components/Defined/Banner';
import DetailSection from './components/Defined/DetailSection';

function App() {
  return (
    <Page>
      <FadeIn>
        <Banner />
        <DetailSection />
      </FadeIn>
    </Page>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
