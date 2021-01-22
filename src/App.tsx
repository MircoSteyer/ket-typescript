import React from 'react';
import {CssBaseline, Divider, MuiThemeProvider, Typography} from "@material-ui/core";
import {theme} from "./theme";
import Navigation from "./Components/Navigation";
import Album from "./Components/Album";
import ImageCarousel from "./Components/ImageCarousel";
import {albumContents} from "./content";
import CompanyFeatures from "./Components/CompanyFeatures";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import CompanyInformation from "./Components/CompanyInformation";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <CssBaseline/>
          <Navigation/>
          <ImageCarousel albumCards={albumContents}/>
          <CompanyInformation/>
          <CompanyFeatures/>
          <Divider variant={"middle"}/>
          <Album/>
          <Divider variant={"middle"}/>
          <Contact/>
          <Divider variant={"middle"}/>
          <Footer/>
      </MuiThemeProvider>
  );
}

export default App;
