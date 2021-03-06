import React, {useState} from 'react';
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {Button, Toolbar, AppBar, useScrollTrigger, Slide} from "@material-ui/core";
import {HashLink} from "react-router-hash-link";

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

    const trigger = useScrollTrigger({threshold: -10});

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navigation = () => {
    const classes = useStyles()

    const [isShown, setIsShown] = useState(false)

    return (
        <React.Fragment>
            <HideOnScroll>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <HashLink to={"#about"} style={{textDecoration: "none", color:"inherit"}}>
                            <Button color="primary">ÜBER UNS</Button>
                        </HashLink>
                        <HashLink to={"#gallery"} style={{textDecoration: "none", color:"inherit"}}>
                            <Button color="primary">GALLERIE</Button>
                        </HashLink>
                        <HashLink to={"#contact"} style={{textDecoration: "none", color:"inherit"}}>
                            <Button color="primary">KONTAKT</Button>
                        </HashLink>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
};

export default Navigation;
