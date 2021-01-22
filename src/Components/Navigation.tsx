import React from 'react';
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {Button, IconButton, Toolbar, Typography, AppBar, useScrollTrigger, Slide} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        testText: {
            color: theme.palette.primary.main,
        },
        appBar: {
            background: "transparent",
            boxShadow: "none",
        },
        toolBar: {
            display: "flex",
            justifyContent: "flex-end"
        }
    }),
)

interface Props {
    children: React.ReactElement;
}

function HideOnScroll({children}: Props) {

    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navigation = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <Button color="primary">CONTACT</Button>
                        <Button color="primary">GALLERY</Button>
                        <Button color="primary">ABOUT</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
};

export default Navigation;
