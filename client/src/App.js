import React, { Component } from 'react';

import Header from './Contants/Header';
import Banner from './Components/Banner';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Banner />
        <OurTeam />
        <Contact />
      </body>
    );
  }
}

export default App;
