import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            padding: theme.spacing(6),
        },
    }),
)

const Footer = () => {

    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Fußzeile
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Hier würde vermutlich das Impressum landen, Copyright und keine Ahnung was noch.
            </Typography>
            <Copyright/>
        </footer>
    );
};

export default Footer;
