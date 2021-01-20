import React from 'react';
import {MuiThemeProvider, Typography} from "@material-ui/core";
import {theme} from "./theme";
import Navigation from "./Components/Navigation";
import Album from "./Components/Album";
import ImageCarousel from "./Components/ImageCarousel";
import {albumContents} from "./content";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <Navigation/>
          <ImageCarousel albumCards={albumContents}/>
          {/* album needs heavy splitting into components*/}
          <Album/>

      </MuiThemeProvider>
  );
}

export default App;
