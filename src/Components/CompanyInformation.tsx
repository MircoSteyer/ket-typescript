import React from 'react';
import ComponentHeader from "./ComponentHeader";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import logo from "../logo.jpg"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
/*        border: "3px solid",*/
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
    columnGrid: {
/*        border: "2px solid brown"*/
    },
    insideGrid: {
/*        border: "1px solid green",*/
        padding: 16,
    },
    outerContainer: {
/*        border: "3px dotted blue"*/
    },
    nestedContainerOutside: {
/*        border: "2px solid salmon",*/
/*        padding: "8px 8px 8px 0px"*/
    },
    nestedContainerInside: {
        padding: "8px 8px 8px 0px"
    },
    logo: {
/*        border: "1px solid green",*/
        padding: 0
    }
}))

const CompanyInformation = () => {

    const classes = useStyles()

    return (
        <div id={"about"}>
            <ComponentHeader title={""}/>
            <div className={classes.root}>
                <Grid container className={classes.outerContainer}>
                    <Grid container item xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"}>
                        <Grid item container className={classes.insideGrid}>
                            <Typography color={"primary"} variant={"h3"} gutterBottom>
                                Sie geben uns den Auftrag. Wir erledigen es!
                            </Typography>
                            <Typography variant={"h6"}>
                                Sie haben Tiefbaubedarfe rund ums Haus? Sind Sie auf der Suche
                                nach Unterstützung für Kanal-, Wege- oder Erdarbeiten? Dann sind wir ihr richtiger Ansprechpartner.
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            <Grid item container xs={12} sm={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Zuverlässig
                                    </Typography>
                                    <Typography color={"primary"}>
                                        Wir setzen, das was ausgemacht ist auch um! Keine bösen Überraschungen.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Kompetent
                                    </Typography>
                                    <Typography color={"primary"}>
                                        Sie benötigen eine fachkundige Beratung, dann sind Sie genau richtig bei uns
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} sm={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Individuell
                                    </Typography>
                                    <Typography color={"primary"}>
                                        Bevor ein neues Bauwerk entstehen kann, nehmen für uns Zeit für Ihre Bedarfe.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Erfahrung
                                    </Typography>
                                    <Typography color={"primary"}>
                                        Erfahrene Arbeitskräfte für eine planmäßige und schnelle Erfüllung Ihrer Aufträge!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"} >
                        <Grid item container className={classes.logo}>
                            <img src={`${process.env.PUBLIC_URL}/static/images/KET Logo SVG.svg`} height={"100%"} width={"100%"} alt="Hier sollte eigentlich unser Logo stehen. Scheint, als wäre etwas schief gelaufen."/>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            <Typography color={"primary"} variant={"h3"} gutterBottom>
                                Gesucht - Geplant - Getan!
                            </Typography>
                            <Typography variant={"h6"}>
                                Ein zuverlässiger Regionalpartner an ihrer Seite!
                                Kontaktieren Sie uns einfach bezüglich Ihrer Bedarfe und Planen Sie mit uns die Umsetzung Ihrer Wünsche.
                            </Typography>
                            {/*<Typography variant={"h6"}>
                                Vielleicht noch was cooles, warum der Kunde davon profitiert, zu uns zu kommen. Was weiß denn ich.
                            </Typography>*/}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CompanyInformation;
