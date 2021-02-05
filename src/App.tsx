import React from 'react';
import {CssBaseline, Divider, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
import Navigation from "./Components/Navigation";
import Album from "./Components/Album";
import ImageCarousel from "./Components/ImageCarousel";
import {albumContents} from "./content";
import CompanyFeatures from "./Components/CompanyFeatures";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import CompanyInformation from "./Components/CompanyInformation";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline/>
                    <Navigation/>
                    <ImageCarousel albumCards={albumContents}/>
                    <CompanyInformation/>
                    <Divider variant={"middle"}/>
                    <CompanyFeatures/>
                    <Divider variant={"middle"}/>
                    <Album/>
                    <Divider variant={"middle"}/>
                    <Contact/>
                    <Divider variant={"middle"}/>
                    <Footer/>
                </BrowserRouter>
            </MuiThemeProvider>
        </>

      );
}

export default App;
