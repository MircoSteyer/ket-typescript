import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AlbumCard from "./AlbumCard";
import {albumContents} from "../content";
import ComponentHeader from "./ComponentHeader";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        }
    }),
)

const Album = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <main>
                <ComponentHeader title={"Gallery"}/>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <AlbumCard albumContents={albumContents}/>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

export default Album
