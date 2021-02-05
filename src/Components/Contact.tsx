import React from 'react';
import ComponentHeader from "./ComponentHeader";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: "0 auto",
        maxWidth: "1236px",
        padding: "0px 64px 48px 64px",
        [theme.breakpoints.down("xs")]: {
            padding: "0px 16px 24px 16px"
        },
        [theme.breakpoints.up("sm")]: {
            padding: "0px 64px 32px 64px"
        },
        [theme.breakpoints.up("md")]: {
            padding: "0px 64px 48px 64px"
        }
    },
    addressElement: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    }
}))

const Contact = () => {

    const classes = useStyles()

    return (
        <div id={"contact"} className={classes.root}>
            <ComponentHeader title={"Kontakt"}/>
            <Typography align={"center"} gutterBottom>
                Bei Rückfragen, können Sie uns gerne wie folgt kontaktieren.
                <br/>
                Wir freuen uns auf Ihre Anfrage.
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                <Grid item className={classes.addressElement}>
                    <Typography align={"center"} variant={"h5"}>
                        <PinDropIcon />
                        {" Adresse"}
                    </Typography>
                    <Typography>
                        Klostergasse 25, 04523 Pegau
                    </Typography>
                </Grid>
                <Grid item className={classes.addressElement}>
                    <a href="tel:034296740927" style={{textDecoration: "none", color:"inherit"}}>
                        <Typography align={"center"} variant={"h5"}>
                            <PhoneIcon />
                            {" Telefon"}
                        </Typography>
                        <Typography>
                            034296 740927
                        </Typography>
                    </a>
                </Grid>
                <Grid item className={classes.addressElement}>
                    <a href="mailto:info@ket-pegau.de" target={"_blank"} style={{textDecoration: "none", color:"inherit"}}>
                        <Typography align={"center"} variant={"h5"}>
                            <MailIcon />
                            {" E-Mail"}
                        </Typography>
                        <Typography>
                            info@ket-pegau.de
                        </Typography>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
