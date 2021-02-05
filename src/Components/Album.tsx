import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlbumCard from "./AlbumCard";
import {albumContents} from "../content";
import {AlbumCardContent, AlbumCardContentCategories} from "../Types";
import ComponentHeader from "./ComponentHeader";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        }
    }),
)

const Album = () => {

    const [shownAlbumContents, setShownAlbumContents] = useState<AlbumCardContent[]>(albumContents)

    const classes = useStyles();

    const filterGallery = (albumCategory: AlbumCardContentCategories) => {
        setShownAlbumContents(albumContents.filter(content => content.category === albumCategory))
    }

    return (
        <React.Fragment>
            <main id={"gallery"}>
                <ComponentHeader title={"Gallerie"}/>
                <Grid container justify={"center"}>
                    <Button color={"primary"} onClick={() => filterGallery(AlbumCardContentCategories.RundUmsHaus)}>Rund ums Haus</Button>
                    <Button color={"primary"} onClick={() => filterGallery(AlbumCardContentCategories.Kanalbau)}>Kanalbau</Button>
                    <Button color={"primary"} onClick={() => filterGallery(AlbumCardContentCategories.Außenanlagen)}>Außenanlagen</Button>
                    <Button color={"primary"} onClick={() => filterGallery(AlbumCardContentCategories.Erdarbeiten)}>Erdarbeiten</Button>
                </Grid>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                        <AlbumCard albumContents={shownAlbumContents}/>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Album
