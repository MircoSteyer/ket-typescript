import React from 'react';
import ComponentHeader from "./ComponentHeader";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: "flex",
      justifyContent: "center"
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
        <div id={"contact"}>
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
                        Wonderway 17, 06682, Dinkelsheim
                    </Typography>
                </Grid>
                <Grid item className={classes.addressElement}>
                    <Typography align={"center"} variant={"h5"}>
                        <PhoneIcon />
                        {" Telefon"}
                    </Typography>
                    <Typography>
                        +49 234 5678
                    </Typography>
                </Grid>
                <Grid item className={classes.addressElement}>
                    <Typography align={"center"} variant={"h5"}>
                        <MailIcon />
                        {" E-Mail"}
                    </Typography>
                    <Typography>
                        krassemail@mail.de
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
